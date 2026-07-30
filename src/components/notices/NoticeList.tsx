"use client";

import { useMemo, useState } from "react";
import type { Notice } from "@/types";

// TODO: 실제로는 Firebase Admin SDK로 notices 컬렉션을 조회해야 함 (지금은 샘플 데이터)
const SAMPLE_NOTICES: Notice[] = [
  {
    id: "1",
    title: "Operational Efficiency Upgrades: Q4 2024 Maintenance Schedule",
    content: "",
    category: "Notice",
    isPinned: false,
    views: 1240,
    createdAt: "2024-10-24",
  },
  {
    id: "2",
    title:
      "New 5-Axis Milling Capabilities Integration for Aerospace Grade Components",
    content: "",
    category: "Tech Update",
    isPinned: false,
    views: 3412,
    createdAt: "2024-10-15",
  },
  {
    id: "3",
    title: "품질 관리 프로세스 개편 안내",
    content: "",
    category: "Urgent",
    isPinned: true,
    views: 0,
    createdAt: "2024-10-02",
  },
  {
    id: "4",
    title: "End of Year Production Cut-off and Holiday Closure Schedule",
    content: "",
    category: "Holiday",
    isPinned: false,
    views: 890,
    createdAt: "2024-09-28",
  },
  {
    id: "5",
    title: "Enhanced Tooling System Implementation for Micro-Machining Services",
    content: "",
    category: "Tech Update",
    isPinned: false,
    views: 2105,
    createdAt: "2024-09-12",
  },
];

const CATEGORIES = ["All", "Notice", "Tech Update", "Holiday"] as const;

const CATEGORY_TAG_STYLES: Record<string, string> = {
  Notice: "border border-primary text-primary",
  "Tech Update":
    "border border-on-tertiary-container text-on-tertiary-container bg-tertiary-fixed-dim/20",
  Holiday: "border border-secondary text-secondary",
  Urgent: "bg-error text-on-error",
};

function formatDateLabel(dateStr: string) {
  const d = new Date(dateStr);
  return {
    year: d.getFullYear(),
    monthDay: `${String(d.getMonth() + 1).padStart(2, "0")}.${String(
      d.getDate()
    ).padStart(2, "0")}`,
  };
}

export function NoticeList() {
  const [category, setCategory] = useState<(typeof CATEGORIES)[number]>("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return SAMPLE_NOTICES.filter((n) => {
      const matchesCategory = category === "All" || n.category === category;
      const matchesQuery = n.title.toLowerCase().includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [category, query]);

  return (
    <>
      {/* Filter & Search */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-gutter mb-12">
        <div className="flex gap-4 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={
                category === c
                  ? "px-6 py-2 bg-primary text-on-primary font-medium rounded-full whitespace-nowrap"
                  : "px-6 py-2 bg-surface-container hover:bg-surface-variant text-on-surface-variant font-medium rounded-full transition-colors whitespace-nowrap"
              }
            >
              {c}
            </button>
          ))}
        </div>
        <div className="relative w-full md:w-80">
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">
            search
          </span>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-white border border-outline-variant focus:border-primary focus:ring-0 transition-all rounded-lg text-body-md"
            placeholder="Search notices..."
            type="text"
          />
        </div>
      </div>

      {/* List */}
      <div className="space-y-4">
        {filtered.map((notice) => (
          <NoticeRow key={notice.id} notice={notice} />
        ))}
        {filtered.length === 0 && (
          <p className="text-center text-on-surface-variant py-12">
            검색 결과가 없습니다.
          </p>
        )}
      </div>
    </>
  );
}

function NoticeRow({ notice }: { notice: Notice }) {
  const { year, monthDay } = formatDateLabel(notice.createdAt);
  const pinned = notice.isPinned;

  return (
    <a
      href={`/notices/${notice.id}`}
      className={
        pinned
          ? "group flex flex-col md:flex-row items-start md:items-center p-6 bg-surface-container-low border-2 border-primary hover:shadow-md transition-all duration-300 gap-6"
          : "group flex flex-col md:flex-row items-start md:items-center p-6 bg-white border border-outline-variant hover:border-primary hover:shadow-sm transition-all duration-300 gap-6"
      }
    >
      <div
        className={
          pinned
            ? "flex flex-col items-center justify-center min-w-[80px] h-20 bg-primary text-on-primary"
            : "flex flex-col items-center justify-center min-w-[80px] h-20 bg-surface-container-low border-r border-outline-variant group-hover:bg-primary group-hover:text-on-primary transition-colors"
        }
      >
        <span className="font-technical-data text-xs uppercase opacity-70">
          {year}
        </span>
        <span className="font-headline-md text-2xl font-bold">{monthDay}</span>
      </div>
      <div className="flex-grow">
        <div className="flex items-center gap-3 mb-2">
          <span
            className={`px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest ${CATEGORY_TAG_STYLES[notice.category]}`}
          >
            [{notice.category}]
          </span>
          {pinned ? (
            <span className="text-outline text-xs flex items-center gap-1">
              <span
                className="material-symbols-outlined text-sm"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                push_pin
              </span>
              Pinned
            </span>
          ) : (
            <span className="text-outline text-xs flex items-center gap-1">
              <span className="material-symbols-outlined text-sm">
                visibility
              </span>
              {notice.views.toLocaleString()} views
            </span>
          )}
        </div>
        <h3
          className={
            pinned
              ? "font-headline-md text-xl"
              : "font-headline-md text-xl group-hover:text-primary transition-colors"
          }
        >
          {notice.title}
        </h3>
      </div>
      <div
        className={
          pinned
            ? "flex items-center gap-2 text-primary group-hover:translate-x-1 transition-all"
            : "flex items-center gap-2 text-outline group-hover:text-primary group-hover:translate-x-1 transition-all"
        }
      >
        <span className="material-symbols-outlined">arrow_forward</span>
      </div>
    </a>
  );
}