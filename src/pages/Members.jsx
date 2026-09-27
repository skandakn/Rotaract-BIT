import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";

import TeamCard from "../components/TeamCard";

export default function Members() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

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
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

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
        margin: "0 auto 40px",
        paddingTop: "20px"
      }}>
        <div style={{ padding: "15px 30px", color: "var(--text-primary)", fontWeight: "700", borderBottom: "3px solid #d91b5c", fontSize: "1.25rem", textTransform: "uppercase" }}>
          Our Team
        </div>
      </div>

      {/* 2025–2026 Section */}
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "20px auto 40px",
        maxWidth: "1000px",
        padding: "0 20px"
      }}>
        <div style={{ flex: 1, height: "1px", background: "rgba(128,128,128,0.2)" }} />
        <h2 style={{
          margin: "0 20px",
          padding: "8px 24px",
          borderRadius: "30px",
          background: "rgba(217, 27, 92, 0.1)",
          border: "1px solid rgba(217, 27, 92, 0.3)",
          color: "#d91b5c",
          fontSize: isMobile ? "1.2rem" : "1.5rem",
          fontWeight: "800",
          letterSpacing: "1px",
          textAlign: "center"
        }}>
          2025–2026
        </h2>
        <div style={{ flex: 1, height: "1px", background: "rgba(128,128,128,0.2)" }} />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: isMobile ? "30px 20px" : "60px 40px",
          justifyContent: "center",
          maxWidth: "1150px",
          margin: "0 auto 60px",
          padding: "0 5vw"
        }}
      >
        {members2025.map(member => (
          <motion.div key={member.name} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} style={{ width: isMobile ? "160px" : "240px" }}>
            <TeamCard
              name={member.name}
              designation={member.designation}
              logo_path={member.logo_path}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* 2026–2027 Section */}
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "60px auto 40px",
        maxWidth: "1000px",
        padding: "0 20px"
      }}>
        <div style={{ flex: 1, height: "1px", background: "rgba(128,128,128,0.2)" }} />
        <h2 style={{
          margin: "0 20px",
          padding: "8px 24px",
          borderRadius: "30px",
          background: "rgba(217, 27, 92, 0.1)",
          border: "1px solid rgba(217, 27, 92, 0.3)",
          color: "#d91b5c",
          fontSize: isMobile ? "1.2rem" : "1.5rem",
          fontWeight: "800",
          letterSpacing: "1px",
          textAlign: "center"
        }}>
          2026–2027
        </h2>
        <div style={{ flex: 1, height: "1px", background: "rgba(128,128,128,0.2)" }} />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: isMobile ? "30px 20px" : "60px 40px",
          justifyContent: "center",
          maxWidth: "1150px",
          margin: "0 auto",
          padding: "0 5vw"
        }}
      >
        {members2026.map(member => (
          <motion.div key={member.name + member.designation} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} style={{ width: isMobile ? "160px" : "240px" }}>
            <TeamCard
              name={member.name}
              designation={member.designation}
              logo_path={member.logo_path}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
