"use client";

import { useRef } from "react";
import { motion, useMotionTemplate, useMotionValue } from "motion/react";
import { ArrowUpRightIcon, SunIcon } from "@phosphor-icons/react";

export default function StudioIndustryInteractive() {
  const containerRef = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent<HTMLElement>) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const spotlightBg = useMotionTemplate`radial-gradient(450px circle at ${mouseX}px ${mouseY}px, rgba(180, 84, 60, 0.08), transparent 80%)`;

  return (
    <section
      className="studio-industries studio-container studio-section"
      id="industries"
      aria-labelledby="industries-title"
      onMouseMove={handleMouseMove}
      ref={containerRef}
    >
      <div className="studio-section-title">
        <div>
          <h2 id="industries-title">
            One focused audience.<br />
            <span className="studio-muted">Residential rooftop solar.</span>
          </h2>
        </div>
        <a href="/solar-installers/" className="studio-text-link">
          Explore solar packages <ArrowUpRightIcon size={20} />
        </a>
      </div>

      <div className="studio-industry-interactive-grid studio-solar-industry-grid">
        <motion.div
          className="studio-spotlight-layer"
          style={{ background: spotlightBg }}
          aria-hidden="true"
        />
        <motion.a
          href="/solar-installers/"
          className="studio-industry-interactive-card group"
          whileHover={{ y: -4 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
        >
          <div className="studio-industry-top">
            <span className="studio-industry-index">01</span>
            <span className="studio-industry-tag">Solar installers</span>
            <SunIcon size={26} weight="light" className="studio-industry-icon" />
          </div>
          <div className="studio-industry-content">
            <h3>Websites for residential rooftop installers</h3>
            <p className="studio-industry-outcome">A clear home for your services, projects and quote requests.</p>
            <p className="studio-industry-desc">Explain where you work, show your own installation projects and give homeowners a straightforward way to get in touch.</p>
          </div>
          <div className="studio-industry-kpi-badge">
            <span className="studio-live-dot" />
            <span>Three dedicated package scopes</span>
          </div>
          <div className="studio-industry-footer">
            <span>View solar website packages</span>
            <span className="studio-industry-arrow" aria-hidden="true"><ArrowUpRightIcon size={18} /></span>
          </div>
        </motion.a>
      </div>
    </section>
  );
}
