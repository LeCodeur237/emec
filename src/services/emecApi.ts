import { API_BASE_URL, fetchApi, listData } from "./api";
import type {
  AdministrativeLeader,
  ChurchItem,
  ChurchLeader,
  MeetingTime,
} from "../data/churches";
import type {
  GroupHighlight,
  GroupItem,
  GroupLeader,
} from "../data/groups";

type ApiRecord = Record<string, unknown>;

export interface EventItem {
  title: string;
  category: string;
  day: string;
  month: string;
  location: string;
  time: string;
  description: string;
}

export interface WeeklyProgramItem {
  id: number | string;
  day: string;
  title: string;
  time: string;
}

export interface ContactPayload {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
}

const defaultLeaderImage = "/images/fondateur.png";

function isRecord(value: unknown): value is ApiRecord {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function unwrapData(value: unknown): unknown {
  return isRecord(value) && "data" in value ? value.data : value;
}

function text(record: ApiRecord, keys: string[], fallback = ""): string {
  for (const key of keys) {
    const value = record[key];
    if (typeof value === "string" && value.trim()) {
      return value;
    }
    if (typeof value === "number" || typeof value === "boolean") {
      return String(value);
    }
  }

  return fallback;
}

function bool(record: ApiRecord, keys: string[], fallback = false): boolean {
  for (const key of keys) {
    const value = record[key];
    if (typeof value === "boolean") {
      return value;
    }
  }

  return fallback;
}

function absoluteMediaUrl(value: unknown, fallback: string): string {
  if (typeof value !== "string" || !value.trim()) {
    return fallback;
  }

  if (value.startsWith("http://") || value.startsWith("https://") || value.startsWith("/")) {
    return value;
  }

  const appBaseUrl = API_BASE_URL.replace(/\/api\/v1$/i, "");
  return `${appBaseUrl}/storage/${value.replace(/^\/+/, "")}`;
}

function collection(value: unknown): ApiRecord[] {
  const data = unwrapData(value);

  if (Array.isArray(data)) {
    return data.filter(isRecord);
  }

  return [];
}

function mediaUrl(record: ApiRecord, fallback: string): string {
  const media = collection(record.media);
  const firstMedia = media[0];

  return absoluteMediaUrl(
    record.image || firstMedia?.url || firstMedia?.file_path || firstMedia?.path,
    fallback,
  );
}

function meetingTimesFrom(record: ApiRecord): MeetingTime[] {
  const meetingTimes = collection(record.meeting_times || record.meetingTimes)
    .map((meeting) => ({
      day: text(meeting, ["day"], ""),
      hours: text(meeting, ["hours", "time"], ""),
    }))
    .filter((meeting) => meeting.day && meeting.hours);

  return meetingTimes;
}

function apiList(value: unknown): ApiRecord[] {
  return listData<ApiRecord>(value).filter(isRecord);
}

function formatDateParts(value: unknown): { day: string; month: string; time: string } {
  if (typeof value !== "string" || !value) {
    return { day: "Prog.", month: "A annoncer", time: "Selon programmation" };
  }

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return { day: "Prog.", month: "A annoncer", time: "Selon programmation" };
  }

  return {
    day: new Intl.DateTimeFormat("fr-FR", { day: "2-digit" }).format(date),
    month: new Intl.DateTimeFormat("fr-FR", { month: "short" }).format(date).replace(".", ""),
    time: new Intl.DateTimeFormat("fr-FR", { hour: "2-digit", minute: "2-digit" }).format(date),
  };
}

function periodFrom(record: ApiRecord): string {
  const start = text(record, ["start_date"]);
  const end = text(record, ["end_date"]);

  if (start && end) {
    return `${start} - ${end}`;
  }

  if (start) {
    return `${start} - Aujourd'hui`;
  }

  return "2024 - Aujourd'hui";
}

function normalizeChurchLeader(record: ApiRecord): ChurchLeader {
  return {
    name: text(record, ["name"], "A renseigner"),
    responsibility: text(record, ["responsibility", "role"], "Responsable"),
    image: absoluteMediaUrl(record.image, defaultLeaderImage),
    period: periodFrom(record),
  };
}

function normalizeAdministrativeLeader(record: ApiRecord): AdministrativeLeader {
  return {
    name: text(record, ["name"], "A renseigner"),
    role: text(record, ["responsibility", "role"], "Responsable administratif"),
    image: absoluteMediaUrl(record.image, defaultLeaderImage),
    period: periodFrom(record),
  };
}

function normalizeChurch(record: ApiRecord): ChurchItem {
  const name = text(record, ["name"], "Assemblee EMEC");
  const address = text(record, ["address"], "Yaounde, Cameroun");
  const leaders = collection(record.leaders).map(normalizeChurchLeader);
  const meetingTimes = meetingTimesFrom(record);

  return {
    slug: text(record, ["slug"], ""),
    name,
    baptismName: text(record, ["baptism_name", "baptismName"], "A renseigner"),
    city: text(record, ["city"], "Yaounde"),
    address,
    neighborhood: text(record, ["neighborhood"], address),
    locality: text(record, ["locality"], address),
    sector: text(record, ["sector"], "Secteur ecclesiastique"),
    district: text(record, ["district"], "District ecclesiastique"),
    circumscription: text(record, ["circumscription"], "Circonscription ecclesiastique"),
    missionField: text(record, ["mission_field", "missionField"], "Champ Missionnaire du Cameroun"),
    region: text(record, ["region"], address),
    status: text(record, ["status"], "Assemblee Locale"),
    description: text(record, ["description"], ""),
    pastorVision: text(record, ["pastor_vision", "pastorVision"], ""),
    meetingTimes: meetingTimes.length ? meetingTimes : [
      { day: "Dimanche", hours: "09h00 - 12h30" },
      { day: "Mercredi", hours: "17h30 - 19h00" },
    ],
    schedule: text(record, ["schedule"], "Dimanche 09h00 - 12h30"),
    contact: text(record, ["contact"], "(+237) 699 76 54 35"),
    image: mediaUrl(record, "/images/home-2.jpg"),
    alt: name,
    mapUrl: text(record, ["map_url", "mapUrl"], `https://maps.google.com/?q=${encodeURIComponent(`${name} ${address} Cameroun`)}`),
    leaders,
    administrativeLeaders: [],
  };
}

function normalizeGroupLeader(record: ApiRecord): GroupLeader {
  return {
    name: text(record, ["name"], "A renseigner"),
    role: text(record, ["responsibility", "role"], "Responsable"),
    image: absoluteMediaUrl(record.image, defaultLeaderImage),
    period: periodFrom(record),
  };
}

function normalizeGroup(record: ApiRecord): GroupItem {
  const name = text(record, ["name"], "Groupe EMEC");
  const description = text(record, ["short_description", "description"], "");
  const details = text(record, ["description", "details"], description);
  const leaders = collection(record.leaders).map(normalizeGroupLeader);
  const mediaImages = collection(record.media).map((media) => absoluteMediaUrl(media.url || media.path || media.file_path, ""));
  const highlights: GroupHighlight[] = [
    { title: "Mission", description },
    { title: "Action", description: details },
  ].filter((item) => item.description);

  return {
    slug: text(record, ["slug"], ""),
    name,
    description,
    details,
    focus: text(record, ["focus"], description),
    vision: text(record, ["vision"], description),
    action: text(record, ["action"], details),
    audience: text(record, ["audience"], "Membres et sympathisants"),
    image: mediaUrl(record, "/images/home-1.jpg"),
    alt: name,
    motto: text(record, ["motto"], ""),
    officialReference: text(record, ["official_reference", "officialReference"], ""),
    highlights,
    galleryImages: mediaImages.filter(Boolean),
    leaders,
    externalUrl: text(record, ["external_url", "externalUrl"], ""),
    photosUrl: text(record, ["photos_url", "photosUrl"], ""),
    isPrivate: bool(record, ["is_private"], false),
  };
}

function normalizeEvent(record: ApiRecord): EventItem {
  const dateParts = formatDateParts(record.start_at);
  const category = unwrapData(record.category);

  return {
    title: text(record, ["title"], "Evenement EMEC"),
    category: isRecord(category) ? text(category, ["name"], "Agenda") : "Agenda",
    day: dateParts.day,
    month: dateParts.month,
    location: text(record, ["location", "city"], "EMEC"),
    time: dateParts.time,
    description: text(record, ["description"], "Temps fort de la vie de l'EMEC."),
  };
}

function normalizeWeeklyProgram(record: ApiRecord): WeeklyProgramItem {
  const start = text(record, ["start_time"]);
  const end = text(record, ["end_time"]);

  return {
    id: text(record, ["id"], crypto.randomUUID()),
    day: text(record, ["day_of_week", "day"], "Programme"),
    title: text(record, ["title"], "Programme EMEC"),
    time: start && end ? `${start} - ${end}` : start || "Selon programmation",
  };
}

export async function fetchChurches(): Promise<ChurchItem[]> {
  const payload = await fetchApi<unknown>("/churches", { query: { per_page: 100 } });
  return apiList(payload).map(normalizeChurch);
}

export async function fetchChurchDetail(slug: string): Promise<ChurchItem | null> {
  const payload = await fetchApi<unknown>(`/churches/${slug}`);
  const data = unwrapData(payload);

  return isRecord(data) ? normalizeChurch(data) : null;
}

export async function fetchGroups(): Promise<GroupItem[]> {
  const payload = await fetchApi<unknown>("/groups", { query: { per_page: 100 } });
  return apiList(payload).map(normalizeGroup);
}

export async function fetchGroupDetail(slug: string): Promise<GroupItem | null> {
  const payload = await fetchApi<unknown>(`/groups/${slug}`);
  const data = unwrapData(payload);

  return isRecord(data) ? normalizeGroup(data) : null;
}

export async function fetchEvents(): Promise<EventItem[]> {
  const payload = await fetchApi<unknown>("/events", { query: { per_page: 100 } });
  return apiList(payload).map(normalizeEvent);
}

export async function fetchWeeklyPrograms(): Promise<WeeklyProgramItem[]> {
  const payload = await fetchApi<unknown>("/weekly-programs", { query: { per_page: 100 } });
  return apiList(payload).map(normalizeWeeklyProgram);
}

export async function submitContact(payload: ContactPayload): Promise<void> {
  await fetchApi<unknown>("/contact", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

export async function subscribeNewsletter(email: string, name?: string): Promise<void> {
  await fetchApi<unknown>("/newsletter/subscribe", {
    method: "POST",
    body: JSON.stringify({ email, name }),
  });
}
