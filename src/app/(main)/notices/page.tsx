import type { Metadata } from "next";
import { NoticeList } from "@/components/notices/NoticeList";

export const metadata: Metadata = {
  title: "Notices | JM정공",
};

export default function NoticesPage() {
  return (
    <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-section-gap">
      {/* Header Banner */}
      <div className="relative overflow-hidden mb-16 rounded-xl bg-primary-container p-8 md:p-12 text-on-primary">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-on-primary/10 border border-on-primary/20 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-on-tertiary-container animate-pulse" />
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-primary">
              Communication Hub
            </span>
          </div>
          <h2 className="font-headline-xl text-headline-xl mb-4">
            Notice &amp; Updates
          </h2>
          <p className="font-body-lg text-body-lg text-on-primary-container max-w-2xl">
            Stay informed with the latest technological breakthroughs,
            production schedules, and official company announcements from our
            precision engineering labs.
          </p>
        </div>
      </div>

      <NoticeList />

      {/* TODO: 실제 페이지네이션은 Firestore 연동 후 항목 수에 맞춰 구현 */}
      <div className="mt-16 flex justify-center items-center gap-2">
        <button
          disabled
          className="w-10 h-10 flex items-center justify-center border border-outline-variant text-outline-variant rounded"
        >
          <span className="material-symbols-outlined">chevron_left</span>
        </button>
        <button className="w-10 h-10 flex items-center justify-center bg-primary text-on-primary font-bold rounded">
          1
        </button>
        <button
          disabled
          className="w-10 h-10 flex items-center justify-center border border-outline-variant text-outline-variant rounded"
        >
          <span className="material-symbols-outlined">chevron_right</span>
        </button>
      </div>
    </div>
  );
}