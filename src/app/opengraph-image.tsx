import { ImageResponse } from "next/og";
import { fullAddress, site } from "@/content/site";

export const alt = "Contrasts Hair Studio — organic hair salon in Grange, Brisbane";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", background: "#f5f2ea", color: "#1c231f" }}>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 64 }}>
          <div style={{ fontSize: 44, letterSpacing: 10 }}>contrasts.</div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 64, lineHeight: 1.05 }}>Organic hair salon in Grange, Brisbane.</div>
            <div style={{ marginTop: 24, fontSize: 26, color: "#55605a" }}>{fullAddress}</div>
            <div style={{ marginTop: 8, fontSize: 26, color: "#4f7a40" }}>{`Call ${site.phone}`}</div>
          </div>
        </div>
        <div style={{ width: 430, background: "#1c231f", color: "#f5f2ea", display: "flex", flexDirection: "column", justifyContent: "center", padding: 56 }}>
          <div style={{ fontSize: 22, letterSpacing: 4, color: "#8bb57a" }}>100% FREE OF</div>
          {["ammonia", "parabens", "sulfates"].map((w) => (
            <div key={w} style={{ fontSize: 64, marginTop: 12, textDecoration: "line-through", textDecorationColor: "#8bb57a" }}>
              {w}
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
