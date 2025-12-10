import React from "react";

interface Props {
  words: string;
  as?: "h1" | "h2";
}

export function TextGenerateEffect({ words, as = "h1" }: Props) {
  const Tag = as;
  return (
    <Tag className="text-3xl md:text-5xl font-extrabold tracking-tight text-emerald-50">
      {words}
    </Tag>
  );
}