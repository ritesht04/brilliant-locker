"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";

const stats = [
  { value: "150+", label: "Projects Delivered" },
  { value: "80+", label: "Happy Clients" },
  { value: "3+", label: "Years Experience" },
  { value: "25+", label: "Team Members" },
];

export default function Stats() {
  return (
    <section className="border-y border-border bg-surface/60 py-14">
      <Container>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="text-center"
            >
              <p className="font-display text-3xl font-bold text-primary-light sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs text-text-muted sm:text-sm">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}