import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from "react";

import TeamCard from "../components/TeamCard";

export default function Members() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [selectedYear, setSelectedYear] = useState("2025–2026");

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const members2025 = [
    { designation: "President", name: "Rtr.Vijhortha VS", logo_path: "/images/Vijhortha.png" },
    { name: "Rtr.Varun V", designation: "Vice President", logo_path: "/images/Varun.png" },
    { name: "Rtr.Sharanya S Devadiga", designation: "Club Advisor", logo_path: "/images/Sharanya.png" },
    { name: "Rtr.Taksha Tangudu", designation: "Secretary", logo_path: "/images/Taksha.png" },
    { name: "Rtr.Parwath Sri Raju K", designation: "Joint Secretary", logo_path: "/images/Parwath.png" },
    { designation: "Treasurer", name: "Rtr.Rashi Goyal", logo_path: "/images/Rashi.png" },
    { name: "Rtr.Mitu Shyam", designation: "Sergeant", logo_path: "/images/Mitu_shyam.png" },
    { name: "Rtr.Yuvaraj Gowda", designation: "Club Media Lead", logo_path: "/images/Yuvaraj.png" },
    { name: "Rtr.Kushal", designation: "Professional Service Director", logo_path: "/images/Kushal.png" },
    { name: "Rtr.Abdullah", designation: "International Service Director", logo_path: "/images/Abdullah.png" },
    { name: "Rtr.Medha Balaji", designation: "Club Service Director", logo_path: "/images/Medha.png" },
    { name: "Rtr.Sudhanshu Kumar", designation: "Immediate Past President", logo_path: "/images/Sudhanshu.png" },
    { designation: "Community Service Director", name: "Rtr.Srujan", logo_path: "/images/Srujan.png" },
    { name: "Rtr.Shreya Srinivas", designation: "PR Director", logo_path: "/images/Shreya.png" },
    { name: "Rtr.Anirudh", designation: "Event Coordinator", logo_path: "/images/Anirudh.png" },
    { name: "Rtr.Sanjana R Rao", designation: "Event Coordinator", logo_path: "/images/Sanjana_Rao.png" },
    { designation: "Event Coordinator", name: "Rtr.Parinetha", logo_path: "/images/Parinetha.png" },
    { name: "Rtr.Varshita Buddula", designation: "Event Coordinator", logo_path: "/images/Varshita.png" },
    { name: "Rtr.Judah Samuel", designation: "Photography", logo_path: "/images/Judah.png" },
    { designation: "Editorial", name: "Rtr.Shihaz Arfath", logo_path: "/images/Shihaz.png" },
    { name: "Rtr.Harshitha Jadhav", designation: "Graphic Designer", logo_path: "/images/Harshitha.png" },
    { designation: "Graphic Designer", name: "Rtr.Shreyas", logo_path: "/images/Shreyas.png" },
    { name: "Rtr.Rohith HM", designation: "Graphic Designer", logo_path: "/images/Rohit.png" },
    { name: "Rtr.Aishwarya Darshini S", designation: "Graphic Designer", logo_path: "/images/Aishwarya.png" },
    { name: "Rtr.Manish", designation: "Marketing", logo_path: "/images/Manish.png" },
    { name: "Rtr.Prachi Rawat", designation: "Marketing", logo_path: "/images/Prachi.png" },
    { name: "Rtr.Raja", designation: "Creative", logo_path: "/images/Raja.png" },
    { name: "Rtr.Devika Sitalgeri", designation: "Creative", logo_path: "/images/Devika.png" },
    { name: "Rtr.Pragathi", designation: "Creative", logo_path: "/images/Pragathi.png" },
    { name: "Rtr.Vasundhara V", designation: "Creative", logo_path: "/images/Vasundhara.png" },
    { name: "Rtr.Prakhyath S", designation: "Web Designer", logo_path: "/images/Prakhyath_s.png" },
  ];

  const members2026 = [
    { name: "Shreya Srinivas", designation: "President", logo_path: "/images/Shreya.png" },
    { name: "Prakhyath S", designation: "Secretary", logo_path: "/images/Prakhyath_s.png" },
    { name: "Pragathi", designation: "Vice President", logo_path: "/images/Pragathi.png" },
    { name: "Anirudh G", designation: "Joint Secretary", logo_path: "/images/Anirudh.png" },
    { name: "Harshita Jadhav", designation: "Sergeant", logo_path: "/images/Harshitha.png" },
    { name: "Medha Balaji", designation: "Treasurer", logo_path: "/images/Medha.png" },
    { name: "Shihaz Arfath", designation: "Media Lead", logo_path: "/images/Shihaz.png" },
    { name: "Aadya Singh", designation: "Professional Service Director", logo_path: "/images/shape-person.png" },
    { name: "Abdullah", designation: "International Service Director", logo_path: "/images/Abdullah.png" },
    { name: "Bhavesh Patel", designation: "Club Service Director", logo_path: "/images/shape-person.png" },
    { name: "S. Purvi", designation: "Joint Club Service Director", logo_path: "/images/shape-person.png" },
    { name: "Srujan N", designation: "Community Service Director", logo_path: "/images/Srujan.png" },
    { name: "Asmita Majumdar", designation: "Joint Community Service Director", logo_path: "/images/shape-person.png" },
    { name: "Anish Bandapelly", designation: "Next Gen Director", logo_path: "/images/shape-person.png" },
    { name: "Adithya Bolar", designation: "PR Director", logo_path: "/images/shape-person.png" },
    { name: "Varshitha Buddula", designation: "Event Coordinator", logo_path: "/images/Varshita.png" },
    { name: "Sanskar Khandelwal", designation: "Event Coordinator", logo_path: "/images/shape-person.png" },
    { name: "Sadgi Gupta", designation: "Event Coordinator", logo_path: "/images/shape-person.png" },
    { name: "Chethak L N", designation: "Editorial", logo_path: "/images/shape-person.png" },
    { name: "P. Narain Balaji", designation: "Editorial", logo_path: "/images/shape-person.png" },
    { name: "Vasundhara V", designation: "Creative", logo_path: "/images/Vasundhara.png" },
    { name: "Shiyana I D", designation: "Creative", logo_path: "/images/shape-person.png" },
    { name: "Yuvraj Mehta", designation: "Marketing", logo_path: "/images/shape-person.png" },
    { name: "Koushik K L", designation: "Marketing", logo_path: "/images/shape-person.png" },
    { name: "Ruthu Bhairavi C", designation: "Marketing", logo_path: "/images/shape-person.png" },
    { name: "MD Sofi", designation: "Photography", logo_path: "/images/shape-person.png" },
    { name: "Aishwarya Darshini S", designation: "Design Team", logo_path: "/images/Aishwarya.png" },
    { name: "Harshini M", designation: "Design Team", logo_path: "/images/shape-person.png" },
    { name: "Skanda K N", designation: "Web Designer", logo_path: "/images/shape-person.png" }
  ];

  const containerVariants = {
    hidden: {
      opacity: 0,
      rotateY: -90,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      rotateY: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 1, 0.5, 1],
        staggerChildren: 0.04
      }
    },
    exit: {
      opacity: 0,
      rotateY: 90,
      scale: 0.95,
      transition: {
        duration: 0.35,
        ease: [0.5, 0, 0.75, 0]
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, rotateY: 45, y: 25 },
    visible: { 
      opacity: 1, 
      rotateY: 0, 
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const currentMembers = selectedYear === "2025–2026" ? members2025 : members2026;

  return (
    <div style={{ background: "var(--bg-primary)", minHeight: "100vh", paddingBottom: "100px" }}>

      <div style={{ width: "100%", height: isMobile ? "250px" : "450px", overflow: "hidden", marginTop: "85px" }}>
        <img
          src="/images/Gallery17.jpeg"
          alt="Team Group"
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 30%" }}
        />
      </div>

      <div style={{
        display: "flex",
        justifyContent: "center",
        borderBottom: "1px solid rgba(128,128,128,0.2)",
        maxWidth: "1000px",
        margin: "0 auto 30px",
        paddingTop: "20px"
      }}>
        <div style={{ padding: "15px 30px", color: "var(--text-primary)", fontWeight: "700", borderBottom: "3px solid #d91b5c", fontSize: "1.25rem", textTransform: "uppercase" }}>
          Our Team
        </div>
      </div>

      {/* Side-by-Side Year Selector Tabs */}
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: isMobile ? "12px" : "24px",
        margin: "0 auto 50px",
        padding: "0 20px"
      }}>
        {["2025–2026", "2026–2027"].map((year) => {
          const isActive = selectedYear === year;
          return (
            <motion.button
              key={year}
              onClick={() => setSelectedYear(year)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: isMobile ? "8px 20px" : "12px 32px",
                borderRadius: "30px",
                fontSize: isMobile ? "0.95rem" : "1.15rem",
                fontWeight: "800",
                cursor: "pointer",
                border: "2px solid #d91b5c",
                transition: "background-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease",
                backgroundColor: isActive ? "#d91b5c" : "transparent",
                color: isActive ? "#ffffff" : "#d91b5c",
                boxShadow: isActive ? "0 4px 15px rgba(217, 27, 92, 0.35)" : "none",
                outline: "none"
              }}
            >
              {year}
            </motion.button>
          );
        })}
      </div>

      <div style={{ perspective: "1200px", maxWidth: "1150px", margin: "0 auto", padding: "0 5vw" }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedYear}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: isMobile ? "30px 20px" : "60px 40px",
              justifyContent: "center",
              transformStyle: "preserve-3d"
            }}
          >
            {currentMembers.map(member => (
              <motion.div
                key={member.name + member.designation}
                variants={cardVariants}
                style={{ width: isMobile ? "160px" : "240px", transformStyle: "preserve-3d" }}
              >
                <TeamCard
                  name={member.name}
                  designation={member.designation}
                  logo_path={member.logo_path}
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
