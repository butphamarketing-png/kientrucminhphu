import { Fragment } from "react";

function inline(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="text-[#3498db]">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return <Fragment key={i}>{part}</Fragment>;
  });
}

function Lines({ text, k }: { text: string; k: string }) {
  const lines = text.split("\n").filter((l) => l.trim());
  const allList = lines.length > 0 && lines.every((line) => line.trim().startsWith("- "));
  if (allList) {
    return (
      <ul className="pl-5 space-y-2">
        {lines.map((line, j) => (
          <li key={`${k}-${j}`}>{inline(line.replace(/^\s*-\s+/, ""))}</li>
        ))}
      </ul>
    );
  }
  return (
    <div className="space-y-3">
      {lines.map((line, j) =>
        line.trim().startsWith("- ") ? (
          <ul key={`${k}-${j}`} className="pl-5">
            <li>{inline(line.replace(/^\s*-\s+/, ""))}</li>
          </ul>
        ) : (
          <p key={`${k}-${j}`} className="m-0 text-justify">
            {inline(line)}
          </p>
        ),
      )}
    </div>
  );
}

export function CmsBody({ text }: { text: string }) {
  const blocks = text
    .trim()
    .split(/\n\s*\n/)
    .map((b) => b.trim())
    .filter(Boolean);

  return (
    <div className="cms-body space-y-4">
      {blocks.map((block, i) => {
        if (block.startsWith("## ")) {
          const [head, ...rest] = block.split("\n");
          const restText = rest.join("\n").trim();
          return (
            <div key={i}>
              <h3 className="text-[18px] font-bold text-[#3498db] !mt-8 !mb-3">
                {head.slice(3).trim()}
              </h3>
              {restText ? <Lines text={restText} k={`${i}-r`} /> : null}
            </div>
          );
        }
        return <Lines key={i} text={block} k={`${i}`} />;
      })}
    </div>
  );
}
