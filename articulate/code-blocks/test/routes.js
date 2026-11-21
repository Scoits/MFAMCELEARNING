// Vaste testroutes per module. Een stap is:
//   "next"        klik de hoofdknop (Start, Verder, Controleer enzovoort)
//   getal n       kies optie n (0 = A) in een keuzevraag
//   [a, b, ...]   selecteer deze kaartjes en klik Controleer
//   "checkall"    vink alle items van een checklist aan
//   {zone: id}    tik op een plek op de plattegrond
async function scenarioStep(frame, step) {
  if (step === "next") {
    await frame.locator(".main .actions .btn").last().click();
  } else if (typeof step === "number") {
    await frame.locator(".main .options .opt").nth(step).click();
  } else if (Array.isArray(step)) {
    for (const n of step) await frame.locator(".main .options .opt").nth(n).click();
    await frame.locator(".main .actions .btn").last().click();
  } else if (step === "checkall") {
    const boxes = frame.locator(".main input[type=checkbox]");
    const n = await boxes.count();
    for (let i = 0; i < n; i++) await boxes.nth(i).check();
  } else if (step && step.zone) {
    await frame.locator(`[data-zone="${step.zone}"]`).click();
  }
}

module.exports = {
  "MC-L04-SL01": [
    {
      name: "juist", phone: true, run: scenarioStep,
      // intro, s1 A, s2 A, s3 B, s4 vijf juiste, s5 A, s6 A, s7 checklist, debrief
      steps: ["next", 0, "next", 0, "next", 1, "next", [0, 2, 3, 5, 7], "next", 0, "next", 0, "next", "checkall", "next"],
      shotsAt: [1, 2, 6, 8, 10, 14, 15],
      expect: (node, v) => node === "s9" && v.Punten === 6 && v.Tijdpad === "juist" && v.GegevensJuist === 5
    },
    {
      name: "omweg", phone: false, run: scenarioStep,
      // s1 C, s2 B (laat), s2b, s3 A, s3a, s4 drie juist, s5 B, s5a, s6 B, s7, s8, debrief
      steps: ["next", 2, "next", 1, "next", "next", 0, "next", [0, 2, 4], "next", [0, 1, 2, 4, 6], "next", 1, "next", "next", 1, "next", "checkall", "next", "next"],
      shotsAt: [5, 9, 11, 13, 20],
      expect: (node, v) => node === "s9" && v.Punten === 0 && v.Tijdpad === "laat" && v.GegevensJuist === 2
    }
  ]
};

module.exports["MC-L08-SL01"] = [
  {
    name: "juist", phone: true, run: scenarioStep,
    // intro, s1 A, s2 vijf juist, s3 B, s4 B, s5 B, s6 B, s7 B, s8 twee juist, debrief
    steps: ["next", 0, "next", [0, 2, 3, 5, 7], "next", 1, "next", 1, "next", 1, "next", 1, "next", 1, "next", [0, 2], "next"],
    shotsAt: [1, 2, 4, 14, 16, 17],
    expect: (node, v) => node === "s9" && v.Punten === 8 && v.TasJuist === 5
  },
  {
    name: "omweg", phone: false, run: scenarioStep,
    // s1 B, s1a, s2 fout, s3 A, s4 A, s5 C, s5a, s6 A, s6a, s7 A, s8 fout, debrief
    steps: ["next", 1, "next", "next", [1, 4, 6, 0, 2], "next", 0, "next", 0, "next", 2, "next", "next", 0, "next", "next", 0, "next", [1, 3], "next"],
    shotsAt: [3, 5, 16, 19, 20],
    expect: (node, v) => node === "s9" && v.Punten === 0 && v.TasJuist === 2
  }
];

module.exports["MFA-L07-SL01"] = [
  {
    name: "juist", phone: true, run: scenarioStep,
    steps: ["next", 0, "next", 1, "next", 0, "next", 1, "next", 0, "next", 1, "next", 1, "next", 1, "next"],
    shotsAt: [1, 2, 4, 8, 14, 17],
    expect: (node, v) => node === "s9" && v.Punten === 8 && v.Omweg === 0
  },
  {
    name: "omweg", phone: false, run: scenarioStep,
    // s1 B, s1b, s2 A opnieuw, s2 B, s3 B, s3b, s4 A opnieuw, s4 B, s5 B opnieuw, s5 A, s6 C opnieuw, s6 B, s7 A, s7b, s8 C opnieuw, s8 B
    steps: ["next", 1, "next", "next", 0, "next", 1, "next", 1, "next", "next", 0, "next", 1, "next", 1, "next", 0, "next", 2, "next", 1, "next", 0, "next", "next", 2, "next", 1, "next"],
    shotsAt: [5, 11, 20, 29],
    expect: (node, v) => node === "s9" && v.Punten === 0 && v.Omweg === 3
  }
];

module.exports["MFA-L01-I01"] = [
  {
    name: "route", phone: true, run: scenarioStep,
    // start, kombuis fout, ziekenruimte goed, volgende, verf fout, gang brug goed, volgende, gang acc goed, afronden
    steps: ["next", { zone: "kombuis" }, { zone: "zieken" }, "next", { zone: "verf" }, { zone: "gbrug" }, "next", { zone: "gacc" }, "next"],
    shotsAt: [1, 2, 3, 5, 8, 9],
    expect: (node) => node === "end"
  }
];
