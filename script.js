const parcels = [
  {
    no: 1,
    deedNo: "56121",
    title: "NGONG/NGONG/4397",
    county: "Kajiado",
    location: "Kajiado, Ngong",
    registeredTo:
      "Mwashuma Kamata Nyatta & Constance Turnbull Nyatta",
    size: 0.08,
    status: "clean",
    statusLabel: "Clean",
    value: 7000000,
    purchaseDate: "08/08/1998",
    purchasePrice: "70,000",
    note:
      "Land valuation, inclusive of the house, sums up to KSh 18,000,000.",
    drive:
      "https://drive.google.com/drive/folders/1-bgpjf8l8A1Zaaux-1z_Wi_0K0VZS9O3?usp=sharing",
    gps:
      "https://maps.app.goo.gl/4kuwLNWGFsqqDFrW6?g_st=am"
  },

  {
    no: 2,
    title: "WERUGHA 696",
    county: "Taita Taveta",
    location: "Taita, Werugha",
    registeredTo: "Ayub Mwasi Nyatta",
    size: 1.2,
    status: "sub",
    statusLabel: "Sub Divided",
    documents:
      "Application of Consent, Certificate of Official Search, Application for Registration, Land Charge, Land Certificate, Adjudication Letter & Map",
    note:
      "Later subdivided into Werugha/Werugha/1886 and Werugha/Werugha/1887.",
    drive:
      "https://drive.google.com/drive/folders/1w8ThAMgXMYpBZVnykhbU3AoV5JU8KHC2?usp=sharing"
  },

  {
    no: 3,
    title: "WERUGHA/WERUGHA/1886",
    county: "Taita Taveta",
    location: "Taita, Werugha",
    registeredTo: "Mwashuma Kamata Nyatta",
    size: 0.5,
    status: "clean",
    statusLabel: "Clean",
    purchaseDate: "03/07/2001",
    documents: "Title Deed, Transfer Letter",
    note:
      "Originally Werugha/696, split into Werugha/Werugha/1886 and 1887.",
    drive:
      "https://drive.google.com/drive/folders/1nVARySTbZup6hFSbrRUtHb5p8-YLU3yw?usp=sharing"
  },

  {
    no: 4,
    title: "KINGWEDE SHIRAZI/DALGUBE/238",
    county: "Kwale",
    location: "Kwale, Dalgube",
    registeredTo: "Mwasi Nyatta",
    size: 1.34,
    status: "clean",
    statusLabel: "Clean",
    value: 1000000,
    purchaseDate: "08/08/1987",
    purchasePrice: "15,000",
    documents:
      "Title Deed, Sale Agreement, Case Fee Receipt, Confirmation of Payment",
    drive:
      "https://drive.google.com/drive/folders/16KIGwax8T72WmCJcC7Jzy2pqXsHNOwV2?usp=sharing",
    gps:
      "https://maps.google.com/?q=-4.496522,39.405769"
  },

  {
    no: 5,
    deedNo: "665410",
    title: "KINGWEDE SHIRAZI/DALGUBE/241",
    county: "Kwale",
    location: "Kwale, Dalgube",
    registeredTo: "Mwasi Nyatta",
    size: 2.27,
    status: "clean",
    statusLabel: "Clean",
    value: 1550000,
    purchaseDate: "12/07/1986",
    purchasePrice: "10,000",
    documents: "Title Deed, Sale Agreement",
    drive:
      "https://drive.google.com/drive/folders/1PgI7RUa96KFiHZRNE9rFvi8ocONkaEFC?usp=sharing",
    gps:
      "https://maps.google.com/?q=-4.496617,39.407067"
  },

  {
    no: 6,
    deedNo: "665421",
    title: "KINGWEDE SHIRAZI/DALGUBE/254",
    county: "Kwale",
    location: "Kwale, Dalgube",
    registeredTo: "Mwasi Nyatta",
    size: 0.13,
    status: "clean",
    statusLabel: "Clean",
    value: 140000,
    purchaseDate: "04/04/1987",
    purchasePrice: "2,500",
    documents: "Title Deed, Confirmation of Payment",
    drive:
      "https://drive.google.com/drive/folders/1csSGWf7Z33gR3EtHR_jY5b3g5ctldRha?usp=sharing",
    gps:
      "https://www.google.com/maps?q=-4.495650,39.408386"
  },

  {
    no: 7,
    deedNo: "665425",
    title: "KINGWEDE SHIRAZI/DALGUBE/258",
    county: "Kwale",
    location: "Kwale, Dalgube",
    registeredTo: "Mwasi Nyatta",
    size: 2.19,
    status: "clean",
    statusLabel: "Clean",
    value: 1550000,
    purchaseDate: "04/04/1987",
    purchasePrice: "3,000",
    documents: "Title Deed, Confirmation of Payment",
    drive:
      "https://drive.google.com/drive/folders/13LP_MtWX2Ar0Tp9woPMUKpVsVaEpQGI9?usp=sharing",
    gps:
      "https://www.google.com/maps?q=-4.496692,39.408394"
  },

  {
    no: 8,
    title: "KWALE/SHIMONI/303",
    county: "Kwale",
    location: "Kwale, Shimoni",
    registeredTo: "Mwasi Nyatta",
    size: 1,
    status: "clean",
    statusLabel: "Clean",
    purchaseDate: "29/01/1992",
    purchasePrice: "500",
    note:
      "Search restricted by DCI — land is prone to rapid flooding during rainy seasons.",
    drive:
      "https://drive.google.com/drive/folders/1eEIEkwNyKjj5pRMQD2-3Vh-ob6hv_oCc?usp=sharing",
    gps:
      "https://maps.app.goo.gl/N3tkDERvGViL7nDz5?g_st=aw"
  },

  {
    no: 9,
    deedNo: "832055",
    title: "KWALE/DALGUBE/508",
    county: "Kwale",
    location: "Kwale, Dalgube",
    registeredTo: "Mwasi Nyatta",
    size: 1.07,
    status: "clean",
    statusLabel: "Clean",
    value: 650000,
    purchaseDate: "07/03/1987",
    purchasePrice: "7,500 (combined w/ 509)",
    documents:
      "Title Deed, Title Payment Receipt, Sale Agreement, Confirmation of Payment",
    drive:
      "https://drive.google.com/drive/folders/18w_OAsdk_I9WoqZDJ40fxJ_WxqjdWlbn?usp=sharing",
    gps:
      "https://www.google.com/maps?q=-4.500556,39.414575"
  },

  {
    no: 10,
    deedNo: "226763",
    title: "KWALE/DALGUBE/509",
    county: "Kwale",
    location: "Kwale, Dalgube",
    registeredTo: "Mwasi Nyatta",
    size: 0.84,
    status: "clean",
    statusLabel: "Clean",
    value: 500000,
    purchaseDate: "07/03/1987",
    purchasePrice: "7,500 (combined w/ 508)",
    documents:
      "Title Deed, Sale Agreement, Confirmation of Payment",
    drive:
      "https://drive.google.com/drive/folders/1PnOhrAvkOmIBu_eSdfFtWNgIIRjAAm4m?usp=sharing",
    gps:
      "https://www.google.com/maps?q=-4.500614,39.415875"
  },

  {
    no: 11,
    deedNo: "666117",
    title: "KINGWEDE SHIRAZI/DALGUBE/511",
    county: "Kwale",
    location: "Kwale, Dalgube",
    registeredTo: "Mwasi Nyatta",
    size: 0.97,
    status: "clean",
    statusLabel: "Clean",
    value: 600000,
    purchaseDate: "21/03/1987",
    purchasePrice: "2,000",
    documents:
      "Title Deed, Confirmation of Payment",
    drive:
      "https://drive.google.com/drive/folders/1LsUfNeA_0chcLuQjHJMuAPScR4_s-b1a?usp=sharing",
    gps:
      "https://www.google.com/maps?q=-4.501017,39.417183"
  },

  {
    no: 12,
    deedNo: "666118",
    title: "KINGWEDE SHIRAZI/DALGUBE/512",
    county: "Kwale",
    location: "Kwale, Dalgube",
    registeredTo: "Mwasi Nyatta",
    size: 1.39,
    status: "clean",
    statusLabel: "Clean",
    value: 850000,
    purchaseDate: "30/05/1987",
    purchasePrice: "7,000",
    documents:
      "Title Deed, Sale Agreement, Confirmation of Payment",
    drive:
      "https://drive.google.com/drive/folders/1g4C7qmCnhwkn8PfTxmJZudTea9M4aJPI?usp=sharing",
    gps:
      "https://www.google.com/maps?q=-4.501789,39.417372"
  },

  {
    no: 13,
    deedNo: "666723",
    title: "KINGWEDE SHIRAZI/DALGUBE/778",
    county: "Kwale",
    location: "Kwale, Dalgube",
    registeredTo: "Mwasi Nyatta",
    size: 2.11,
    status: "clean",
    statusLabel: "Clean",
    value: 1500000,
    purchaseDate: "27/08/1989",
    purchasePrice: "6,000",
    documents: "Title Deed, Sale Agreement",
    drive:
      "https://drive.google.com/drive/folders/1Hhtx6USRMlnFXhg2p0HKCUsCii873JEQ?usp=sharing",
    gps:
      "https://www.google.com/maps?q=-4.494792,39.414217"
  },

  {
    no: 14,
    deedNo: "666725",
    title: "KINGWEDE SHIRAZI/DALGUBE/780",
    county: "Kwale",
    location: "Kwale, Dalgube",
    registeredTo: "Mwasi Nyatta",
    size: 0.76,
    status: "clean",
    statusLabel: "Clean",
    value: 550000,
    purchaseDate: "21/10/1989",
    purchasePrice: "5,500",
    documents:
      "Title Deed, Sale Agreement, Confirmation of Payment",
    drive:
      "https://drive.google.com/drive/folders/1uqNRdD1opT0GbAEvFkq2PJdwI7OJvllq?usp=sharing",
    gps:
      "https://www.google.com/maps?q=-4.494672,39.416097"
  },

  {
    no: 15,
    deedNo: "666726",
    title: "KINGWEDE SHIRAZI/DALGUBE/781",
    county: "Kwale",
    location: "Kwale, Dalgube",
    registeredTo: "Mwasi Nyatta",
    size: 0.3,
    status: "clean",
    statusLabel: "Clean",
    value: 250000,
    purchaseDate: "08/07/1989",
    purchasePrice: "4,700",
    documents:
      "Title Deed, Sale Agreement, Confirmation of Payment",
    drive:
      "https://drive.google.com/drive/folders/17Kyu3e0e9-oznUOaQ9REL1MGlwuhFkYk?usp=sharing",
    gps:
      "https://www.google.com/maps?q=-4.494861,39.415653"
  },

  {
    no: 16,
    deedNo: "666795",
    title: "KINGWEDE SHIRAZI/DALGUBE/909",
    county: "Kwale",
    location: "Kwale, Dalgube",
    registeredTo: "Mwasi Nyatta",
    size: 2.43,
    status: "clean",
    statusLabel: "Clean",
    value: 1800000,
    purchaseDate: "02/06/1989",
    purchasePrice: "25,000",
    documents:
      "Title Deed, Sale Agreement, Confirmation of Payment",
    drive:
      "https://drive.google.com/drive/folders/1V9ZsXj08Rr7Gl19J0_RgY1m0rwAT_L_-?usp=sharing",
    gps:
      "https://www.google.com/maps?q=-4.493494,39.414508"
  },

  {
    no: 17,
    deedNo: "55389",
    title: "KWALE/MATUGA/1453",
    county: "Kwale",
    location: "Kwale, Matuga",
    registeredTo: "Constance Turnbull Nyatta",
    size: 0.96,
    status: "clean",
    statusLabel: "Clean",
    documents: "Title Deed, Power of Attorney",
    note:
      "Search not yet released — Msaghu to follow up.",
    drive:
      "https://drive.google.com/drive/folders/1LO7DXoQSyVDTKjuY_MUR9a1OpsYAvZU4?usp=sharing"
  },

  {
    no: 18,
    deedNo: "55386",
    title: "KWALE/MATUGA/1270",
    county: "Kwale",
    location: "Kwale, Matuga",
    registeredTo: "Mwasi Nyatta",
    size: 0.8,
    status: "clean",
    statusLabel: "Clean",
    documents: "Title Deed",
    note:
      "Search not yet released — Msaghu to follow up.",
    drive:
      "https://drive.google.com/drive/folders/10t62samGom2MbnYoVSDWaEumodVYTBOa?usp=sharing"
  },

  {
    no: 19,
    title: "P/NO. 639, KIWEGU/JEGO",
    county: "Kwale",
    location: "Kiwegu/Jego, Kwale",
    registeredTo: "Mwasi Nyatta",
    status: "unknown",
    statusLabel: "Unrecorded",
    documents:
      "Letter Ref. MSW/LA/73/48, dated 3 July 1981"
  },

  {
    no: 20,
    title: "PLOT NO. 29",
    county: "Kese/Kitegue",
    location: "Kese/Kitegue",
    registeredTo: "Mwasi Nyatta",
    status: "unknown",
    statusLabel: "No Title Deed",
    documents: "Transfer Letter",
    purchaseDate: "04/03/2004",
    note:
      "This is the butchery land. Land lacks a title deed.",
    drive:
      "https://drive.google.com/file/d/1TFLY7qVPg61kERZFf2fSwPTrpnRXlOeG/view?usp=sharing"
  },

  {
    no: 21,
    title: "PLOT NO. 10022/26",
    county: "Mombasa",
    location: 'Mombasa, Bububu "A" Settlement Scheme',
    registeredTo: "Mwashuma Kamata Nyatta",
    size: 1.214,
    status: "court",
    statusLabel: "Case in Court",
    documents: "TOL (Temporary Occupation Licence)",
    purchaseDate: "19/01/1990",
    purchasePrice: "2,000",
    note:
      "Case No. 1246/2021 — handled by M. K. Mulei. Case won on 24/07/2026.",
    drive:
      "https://drive.google.com/drive/folders/1cMN8bMPUy3xhYMro4IwiRS7qMGD3O9of?usp=sharing"
  }
];


const accessUsers = {
  "Mwashuma@2026": "Mwashuma",
  "Inosi@2026": "Inosi",
  "Tom@2026": "Tom"
};

const authSessionKey = "nyattaAuthorizedUser";


function showWelcome(name) {
  const banner = document.getElementById("welcomeBanner");
  if (!banner) {
    return;
  }

  banner.textContent = `Hello ${name}. Welcome to the Nyatta Real Database.`;
  banner.hidden = false;

  setTimeout(() => {
    banner.hidden = true;
  }, 5000);
}


function unlockRegister(name) {
  document.body.classList.remove("auth-locked");
  const signOutBtn = document.getElementById("signOutBtn");
  if (signOutBtn) {
    signOutBtn.hidden = false;
  }
  showWelcome(name);
}


function lockRegister() {
  document.body.classList.add("auth-locked");

  const signOutBtn = document.getElementById("signOutBtn");
  if (signOutBtn) {
    signOutBtn.hidden = true;
  }

  const banner = document.getElementById("welcomeBanner");
  if (banner) {
    banner.hidden = true;
  }

  const message = document.getElementById("authMessage");
  if (message) {
    message.className = "auth-message";
    message.textContent = "";
  }

  const input = document.getElementById("accessPassword");
  if (input) {
    input.value = "";
    input.focus();
  }

  window.scrollTo({
    top: 0,
    behavior: "auto"
  });
}


function initSignOut() {
  const signOutBtn = document.getElementById("signOutBtn");
  if (!signOutBtn) {
    return;
  }

  signOutBtn.addEventListener("click", () => {
    sessionStorage.removeItem(authSessionKey);
    lockRegister();
  });
}


function initAccessGate() {
  const form = document.getElementById("authForm");
  const input = document.getElementById("accessPassword");
  const message = document.getElementById("authMessage");
  if (!form || !input || !message) {
    return;
  }

  const savedUser = sessionStorage.getItem(authSessionKey);
  if (savedUser) {
    unlockRegister(savedUser);
    return;
  }

  form.addEventListener("submit", event => {
    event.preventDefault();

    const userName = accessUsers[input.value.trim()];
    if (!userName) {
      message.className = "auth-message bad";
      message.textContent = "Password not recognized. Please try again.";
      input.value = "";
      input.focus();
      return;
    }

    message.className = "auth-message ok";
    message.textContent = `Access granted. Hello ${userName}.`;
    sessionStorage.setItem(authSessionKey, userName);

    setTimeout(() => {
      unlockRegister(userName);
    }, 500);
  });
}


const statusMeta = {
  clean: {
    label: "Clean",
    class: "clean"
  },

  sub: {
    label: "Sub Divided",
    class: "sub"
  },

  court: {
    label: "Case in Court",
    class: "court"
  },

  unknown: {
    label: "Unrecorded",
    class: "sub"
  }
};


const investments = [
  {
    institution: "Central Bank of Kenya",
    type: "Bonds",
    purchaseDate: "11/09/2017",
    principal: 10000000,
    rate: "12.966%",
    maturity: "19/07/2027",
    documents:
      "Security, Credit Advice, Bank receipt",
    note:
      "A semi-annual deposit of KES 585,470 is made to CDS Account No. 6240372."
  },

  {
    institution: "Central Bank of Kenya",
    type: "Bonds",
    purchaseDate: "24/09/2018",
    principal: 2200000,
    rate: "13.2%",
    maturity: "01/03/2038",
    documents:
      "Statement of security, Credit Advice",
    note:
      "A semi-annual deposit of KES 130,680 is made to CDS Account No. 6240372."
  }
];


const rentals = [
  {
    county: "Taita-Taveta",
    location: "Werugha, Kese",
    manager: "Elizabeth Mwakori",
    units: 6,
    status: "Not Functional",
    asAt: "02/08/2026",
    note:
      "The rentals are not yet functional due to lack of water supply and paint work that needs to be completed on all the units."
  }
];


const ksh = n =>
  n == null
    ? "—"
    : "KSh " + Number(n).toLocaleString("en-KE");


const ha = n =>
  n == null
    ? "—"
    : n + " Ha";


function stats() {

  const size = parcels.reduce(
    (s, p) => s + (p.size || 0),
    0
  );

  const invest = investments.reduce(
    (s, i) => s + i.principal,
    0
  );

  document.getElementById("statRow").innerHTML = [
    [parcels.length, "Land records"],
    [
      new Set(parcels.map(p => p.county)).size,
      "Land locations"
    ],
    [
      size.toFixed(2) + " Ha",
      "Recorded land size"
    ],
    [
      ksh(invest),
      "Investment principal"
    ]
  ]
    .map(
      x => `
        <div class="stat">
          <div class="num">${x[0]}</div>
          <div class="lbl">${x[1]}</div>
        </div>
      `
    )
    .join("");
}


let activeStatus = "all";
let activeCounty = "all";


function chips() {

  const ss = [
    "all",
    ...new Set(parcels.map(p => p.status))
  ];

  const cs = [
    "all",
    ...new Set(parcels.map(p => p.county))
  ];


  document.getElementById("statusChips").innerHTML =
    ss
      .map(
        s => `
          <button
            class="chip ${s === "all" ? "active" : ""}"
            data-t="status"
            data-v="${s}"
          >
            ${
              s === "all"
                ? "All statuses"
                : `<span
                    class="dot"
                    style="background:var(--${statusMeta[s].class})"
                  ></span>
                   ${statusMeta[s].label}`
            }
          </button>
        `
      )
      .join("");


  document.getElementById("countyChips").innerHTML =
    cs
      .map(
        c => `
          <button
            class="chip ${c === "all" ? "active" : ""}"
            data-t="county"
            data-v="${c}"
          >
            ${c === "all" ? "All counties" : c}
          </button>
        `
      )
      .join("");


  document.querySelectorAll(".chip").forEach(b => {

    b.onclick = () => {

      const t = b.dataset.t;
      const v = b.dataset.v;

      const box =
        t === "status"
          ? "statusChips"
          : "countyChips";


      document
        .querySelectorAll(`#${box} .chip`)
        .forEach(x =>
          x.classList.remove("active")
        );


      b.classList.add("active");


      if (t === "status") {
        activeStatus = v;
      } else {
        activeCounty = v;
      }


      renderLands();
    };

  });
}


function landCard(p) {

  const m = statusMeta[p.status];

  return `
    <article class="deed">

      <div class="deed-top">

        <div class="deed-no">
          No. ${String(p.no).padStart(2, "0")}
          ${p.deedNo ? "· Deed " + p.deedNo : ""}
        </div>

        <div class="stamp ${m.class}">
          ${p.statusLabel}
        </div>

      </div>


      <div>

        <div class="deed-title">
          ${p.title}
        </div>

        <div class="deed-loc">
          ⌖ ${p.location}
        </div>

      </div>


      <div class="deed-name">
        ${p.registeredTo}
      </div>


      <div class="deed-meta">

        <div class="meta-item">
          <div class="k">Size</div>
          <div class="v">${ha(p.size)}</div>
        </div>

        <div class="meta-item">
          <div class="k">Est. value</div>
          <div class="v">${ksh(p.value)}</div>
        </div>

        <div class="meta-item">
          <div class="k">Purchased</div>
          <div class="v">${p.purchaseDate || "—"}</div>
        </div>

        <div class="meta-item">
          <div class="k">Price paid</div>
          <div class="v">
            ${p.purchasePrice
              ? "KSh " + p.purchasePrice
              : "—"}
          </div>
        </div>

      </div>


      ${
        p.note
          ? `
            <div class="deed-note">
              ${p.note}
            </div>
          `
          : ""
      }


      <div class="deed-links">

        ${
          p.drive
            ? `
              <a
                href="${p.drive}"
                target="_blank"
                rel="noopener"
              >
                📄 Documents
              </a>
            `
            : ""
        }

        ${
          p.gps
            ? `
              <a
                href="${p.gps}"
                target="_blank"
                rel="noopener"
              >
                📍 View on map
              </a>
            `
            : ""
        }

      </div>

    </article>
  `;
}


function renderLands() {

  const q =
    document
      .getElementById("searchInput")
      .value
      .trim()
      .toLowerCase();


  const data = parcels.filter(p => {

    const statusOk =
      activeStatus === "all" ||
      p.status === activeStatus;


    const countyOk =
      activeCounty === "all" ||
      p.county === activeCounty;


    const searchOk =
      !q ||
      [
        p.title,
        p.registeredTo,
        p.location,
        p.deedNo,
        p.documents,
        p.note
      ]
        .join(" ")
        .toLowerCase()
        .includes(q);


    return statusOk && countyOk && searchOk;

  });


  document.getElementById("registry").innerHTML =
    data.length
      ? data.map(landCard).join("")
      : `
          <div class="empty-state">
            No land records match those filters.
          </div>
        `;


  document.getElementById("headerCount").textContent =
    `${data.length} of ${parcels.length} land records shown`;
}


function renderInvestments() {

  const total =
    investments.reduce(
      (s, i) => s + i.principal,
      0
    );


  const semi =
    585470 + 130680;


  document.getElementById(
    "investmentSummary"
  ).innerHTML = [

    [
      "Instruments",
      investments.length
    ],

    [
      "Recorded principal",
      ksh(total)
    ],

    [
      "Combined semi-annual deposits",
      ksh(semi)
    ]

  ]
    .map(
      x => `
        <div class="summary-card">

          <div class="k">
            ${x[0]}
          </div>

          <div class="v">
            ${x[1]}
          </div>

        </div>
      `
    )
    .join("");


  document.getElementById(
    "investmentGrid"
  ).innerHTML = investments
    .map(
      (i, n) => `

        <article class="investment-card">

          <div class="investment-top">

            <div>

              <div class="investment-institution">
                ${i.institution}
              </div>

              <div class="investment-title">
                ${i.type} · ${String(n + 1).padStart(2, "0")}
              </div>

            </div>

            <span class="badge">
              Fixed income
            </span>

          </div>


          <div class="investment-value">
            ${ksh(i.principal)}
          </div>


          <div class="investment-meta">

            <div>
              <div class="k">
                Purchase date
              </div>

              <div class="v">
                ${i.purchaseDate}
              </div>
            </div>


            <div>
              <div class="k">
                Rate
              </div>

              <div class="v">
                ${i.rate}
              </div>
            </div>


            <div>
              <div class="k">
                Maturity
              </div>

              <div class="v">
                ${i.maturity}
              </div>
            </div>


            <div>
              <div class="k">
                Documents
              </div>

              <div class="v">
                ${i.documents}
              </div>
            </div>

          </div>


          <div class="investment-note">
            ${i.note}
          </div>

        </article>

      `
    )
    .join("");
}


function renderRentals() {

  document.getElementById(
    "rentalGrid"
  ).innerHTML = rentals
    .map(
      r => `

        <article class="rental-card">

          <div>

            <div class="rental-location">
              ${r.county} · ${r.location}
            </div>

            <div class="rental-title">
              Rental Units
            </div>

            <div class="rental-manager">
              Managed by
              <strong>${r.manager}</strong>
            </div>

          </div>


          <div class="rental-stats">

            <div class="rental-stat">

              <div class="k">
                Number of units
              </div>

              <div class="v">
                ${r.units}
              </div>

            </div>


            <div class="rental-stat">

              <div class="k">
                Status
              </div>

              <div class="v">
                <span class="pill">
                  ${r.status}
                </span>
              </div>

            </div>


            <div class="rental-stat">

              <div class="k">
                Record date
              </div>

              <div class="v">
                ${r.asAt}
              </div>

            </div>

          </div>


          <div class="rental-note">

            <strong>
              Operational note — as at ${r.asAt}:
            </strong>

            ${r.note}

          </div>

        </article>

      `
    )
    .join("");
}


document
  .getElementById("searchInput")
  .addEventListener(
    "input",
    renderLands
  );


initAccessGate();
initSignOut();
stats();
chips();
renderLands();
renderInvestments();
renderRentals();


const links = [
  ...document.querySelectorAll(".nav-link")
];

const sections = [
  ...document.querySelectorAll("section[id]")
];


const observerOptions = {
  rootMargin: "-35% 0px -55% 0px"
};


sections.forEach(section => {

  const observer =
    new IntersectionObserver(
      entries => {

        entries.forEach(entry => {

          if (entry.isIntersecting) {

            links.forEach(link => {

              link.classList.toggle(
                "active",
                link.getAttribute("href") ===
                  "#" + entry.target.id
              );

            });

          }

        });

      },
      observerOptions
    );


  observer.observe(section);

});