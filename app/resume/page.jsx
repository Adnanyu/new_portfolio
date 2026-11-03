import { ME } from "../content";
import { ResumeView } from "./ResumeView";

export const metadata = {
  title: "Resume",
  description: `Resume of ${ME.name}, ${ME.role}.`,
  openGraph: {
    title: `${ME.name} · Resume`,
    description: `Resume of ${ME.name}, ${ME.role}.`,
    type: "profile",
  },
};

export default function ResumePage() {
  return <ResumeView />;
}
