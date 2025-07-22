import React, { useState } from "react";

const zodiacSigns = [
  {
    name: "Aries",
    startDate: "03-21",
    endDate: "04-19",
    description:
      "Bold, ambitious, and confident. Aries is the trailblazer of the zodiac, ready to take on any challenge.",
    color: "#FF6F61",
  },
  {
    name: "Taurus",
    startDate: "04-20",
    endDate: "05-20",
    description:
      "Reliable, patient, and practical. Taurus loves comfort and values stability above all.",
    color: "#6B8E23",
  },
  {
    name: "Gemini",
    startDate: "05-21",
    endDate: "06-20",
    description:
      "Adaptable, curious, and communicative. Gemini thrives on variety and intellectual stimulation.",
    color: "#195c5e",
  },
  {
    name: "Cancer",
    startDate: "06-21",
    endDate: "07-22",
    description:
      "Intuitive, emotional, and caring. Cancer protects their loved ones fiercely and values home.",
    color: "#4682B4",
  },
  {
    name: "Leo",
    startDate: "07-23",
    endDate: "08-22",
    description:
      "Charismatic, generous, and dramatic. Leo loves to shine and inspire those around them.",
    color: "#FFA500",
  },
  {
    name: "Virgo",
    startDate: "08-23",
    endDate: "09-22",
    description:
      "Detail-oriented, analytical, and kind. Virgo seeks perfection and loves helping others.",
    color: "#9ACD32",
  },
  {
    name: "Libra",
    startDate: "09-23",
    endDate: "10-22",
    description:
      "Balanced, charming, and diplomatic. Libra strives for harmony in all relationships.",
    color: "#FF69B4",
  },
  {
    name: "Scorpio",
    startDate: "10-23",
    endDate: "11-21",
    description:
      "Passionate, resourceful, and mysterious. Scorpio dives deep and values loyalty.",
    color: "#800020",
  },
  {
    name: "Sagittarius",
    startDate: "11-22",
    endDate: "12-21",
    description:
      "Optimistic, adventurous, and independent. Sagittarius seeks freedom and new experiences.",
    color: "#FF4500",
  },
  {
    name: "Capricorn",
    startDate: "12-22",
    endDate: "01-19",
    description:
      "Disciplined, ambitious, and practical. Capricorn climbs steadily toward their goals.",
    color: "#2F4F4F",
  },
  {
    name: "Aquarius",
    startDate: "01-20",
    endDate: "02-18",
    description:
      "Innovative, humanitarian, and independent. Aquarius thinks outside the box and values progress.",
    color: "#40E0D0",
  },
  {
    name: "Pisces",
    startDate: "02-19",
    endDate: "03-20",
    description:
      "Compassionate, artistic, and intuitive. Pisces lives in a world of imagination and empathy.",
    color: "#9370DB",
  },
];

// Helper to convert MM-DD string to number for comparison (e.g., "03-21" => 321)
function dateToNum(dateStr) {
  return Number(dateStr.replace("-", ""));
}

// Given month and day as numbers, find zodiac sign
function getZodiacSignFromMonthDay(month, day) {
  if (!month || !day) return null;
  const birthNum = Number(
    String(month).padStart(2, "0") + String(day).padStart(2, "0")
  );
  for (let sign of zodiacSigns) {
    let start = dateToNum(sign.startDate);
    let end = dateToNum(sign.endDate);

    if (start > end) {
      if (birthNum >= start || birthNum <= end) return sign;
    } else {
      if (birthNum >= start && birthNum <= end) return sign;
    }
  }
  return null;
}

export default function App() {
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [selectedSign, setSelectedSign] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const sign = getZodiacSignFromMonthDay(Number(month), Number(day));
    setSelectedSign(sign);
  };

  const handleReset = () => {
    setSelectedSign(null);
    setMonth("");
    setDay("");
  };

  if (!selectedSign) {
    // Start page with month/day inputs & your existing background/fonts/colors
    return (
      <div
        style={{
          fontFamily: "'Rubik', sans-serif",
          minHeight: "100vh",
          width: "100vw",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "2rem",
          backgroundImage: `
            radial-gradient(circle at 20% 20%, #FFF 1px, transparent 2px),
            radial-gradient(circle at 80% 80%, #FFF 1px, transparent 2px),
            radial-gradient(circle at 50% 50%, #FFF 1.5px, transparent 3px),
            linear-gradient(135deg, #4B0082, #2E0854, #000000)`,
          backgroundRepeat: "repeat",
          backgroundSize: "100px 100px, 120px 120px, 140px 140px, 100% 100%",
          backgroundBlendMode: "screen",
          color: "#FFD700",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontWeight: "700",
            fontSize: "3rem",
            marginBottom: "1.5rem",
            textShadow: "0 0 8px rgba(255, 215, 0, 0.7)",
          }}
        >
          Enter your birth date
        </h1>

        <form onSubmit={handleSubmit}>
          <input
            type="number"
            name="month"
            placeholder="Month (1-12)"
            min="1"
            max="12"
            value={month}
            onChange={(e) => setMonth(e.target.value)}
            required
            style={{
              padding: "0.75rem 1rem",
              fontSize: "1.25rem",
              borderRadius: "6px",
              border: "none",
              outline: "none",
              boxShadow: "0 0 10px #FFD700",
              marginBottom: "1rem",
              width: "120px",
              textAlign: "center",
            }}
          />
          <input
            type="number"
            name="day"
            placeholder="Day (1-31)"
            min="1"
            max="31"
            value={day}
            onChange={(e) => setDay(e.target.value)}
            required
            style={{
              padding: "0.75rem 1rem",
              fontSize: "1.25rem",
              borderRadius: "6px",
              border: "none",
              outline: "none",
              boxShadow: "0 0 10px #FFD700",
              marginBottom: "1.5rem",
              width: "120px",
              textAlign: "center",
              marginLeft: "1rem",
            }}
          />
          <br />
          <button
            type="submit"
            style={{
              backgroundColor: "#FFD700",
              color: "#2E0854",
              fontWeight: "700",
              fontSize: "1.25rem",
              padding: "0.75rem 1.5rem",
              borderRadius: "6px",
              border: "none",
              cursor: "pointer",
              boxShadow: "0 0 12px #FFD700",
              transition: "background-color 0.3s ease",
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#FFC107")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#FFD700")}
          >
            Find My Sign
          </button>
        </form>
      </div>
    );
  }

  return (
    <div
      style={{
        fontFamily: "'Rubik', sans-serif",
        minHeight: "100vh",
        width: "100vw",
        padding: "2rem",
        backgroundColor: selectedSign.color,
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "3rem", fontWeight: "700", marginBottom: "0.5rem" }}>
        {selectedSign.name}
      </h1>
      <p
        style={{
          fontSize: "1.5rem",
          fontStyle: "italic",
          marginBottom: "1rem",
          textShadow: "0 0 5px rgba(0,0,0,0.5)",
        }}
      >
        {selectedSign.startDate} - {selectedSign.endDate}
      </p>
      <p style={{ fontSize: "1.25rem", maxWidth: "600px" }}>{selectedSign.description}</p>
      <button
        onClick={handleReset}
        style={{
          marginTop: "2rem",
          padding: "0.75rem 1.5rem",
          fontSize: "1rem",
          fontWeight: "600",
          borderRadius: "6px",
          border: "none",
          cursor: "pointer",
          backgroundColor: "#fff",
          color: selectedSign.color,
          boxShadow: `0 0 10px ${selectedSign.color}`,
          transition: "background-color 0.3s ease",
        }}
        onMouseEnter={(e) => (e.target.style.backgroundColor = selectedSign.color)}
        onMouseLeave={(e) => (e.target.style.backgroundColor = "#fff")}
      >
        Enter New Date
      </button>
    </div>
  );
}
