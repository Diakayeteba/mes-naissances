const DECLARATIONS = [
  {
    id: "60c72b2f9b1d1234567890ab",
    status: "VALIDE",
    firstParent: {
      id: "60c72b2f9b1d1234567890cd",
      gender: "female",
      firstName: "Jane",
      lastName: "Doe",
      email: "jane.doe@example.com",
      phone: "+1 (555) 555-1234",
    },
    secondParent: {
      id: "60c72b2f9b1d1234567890ef",
      gender: "male",
      firstName: "John",
      lastName: "Smith",
      email: "john.smith@example.com",
      phone: "+1 (555) 555-5678",
    },
    child: {
      id: "60c72b2f9b1d1234567890gh",
      gender: "male",
      firstName: "Leo",
      lastName: "Doe",
      birthDate: "2018-04-12T10:30:00 -02:00",
    },
    company: {
      name: "ECOLE PRIMAIRE DU CENTRE",
      address: "123 Rue de la Paix, Paris, Île-de-France, 75002",
    },
    about: "Inscription pour la rentrée scolaire.",
    registered: "2026-02-15T14:22:12 -01:00",
  },
  {
    id: "60c72b2f9b1d1234567890ij",
    status: "NOUVEAU",
    firstParent: {
      id: "60c72b2f9b1d1234567890kl",
      gender: "male",
      firstName: "Marc",
      lastName: "Dubois",
      email: "marc.dubois@example.com",
      phone: "+1 (555) 555-9876",
    },
    secondParent: {
      id: "60c72b2f9b1d1234567890mn",
      gender: "female",
      firstName: "Sophie",
      lastName: "Dubois",
      email: "sophie.dubois@example.com",
      phone: "+1 (555) 555-4321",
    },
    child: {
      id: "60c72b2f9b1d1234567890op",
      gender: "female",
      firstName: "Emma",
      lastName: "Dubois",
      birthDate: "2019-08-22T11:15:00 -02:00",
    },
    company: {
      name: "CRECHE DES PETITS LOUPS",
      address: "456 Avenue de la République, Lyon, Auvergne-Rhône-Alpes, 69002",
    },
    about: "Demande de garde temps plein.",
    registered: "2026-05-10T09:05:43 -01:00",
  },
];

const HEADER = `<div class="row border border-primary">
                    <div class="col-md-1 border-secondary border-end">
                        Date
                    </div>
                    <div class="col-md-2 border-secondary border-end">
                        First Parent
                    </div>
                    <div class="col-md-2 border-secondary border-end">
                        Second parent
                    </div>
                    <div class="col-md-2 border-secondary border-end">
                        Child
                    </div>

                    <div class="col-md-1 border-secondary border-end">
                        Birth date
                    </div>
                    <div class="col-md-2 border-secondary border-end">
                        Company
                    </div>
                    <div class="col-md-2">
                        Status
                    </div>

                </div>
            </div>`;
function recharger() {
  console.log("recharger les declarations");

  // Utilisation de .join("") à la fin pour éviter les virgules parasites à l'affichage HTML
  const declarationsAsHtml = DECLARATIONS.map((item, index) => {
    return `
        <div class="row border border-primary my-2 declaration">
            <div class="col-md-1 border-secondary border-end">
                ${item.registered || ""}
            </div>
            <div class="col-md-2 border-secondary border-end">
                <p class="mb-0 text-sm "><b>${item.firstParent?.firstName || ""} ${item.firstParent?.lastName || ""}</b></p>
                <p class="mb-0 text-sm ">${item.firstParent?.email || ""}</p>
                <p class="mb-0 text-sm ">${item.firstParent?.phone || ""}</p>
            </div>
            <div class="col-md-2 border-secondary border-end">
                <p class="mb-0 text-sm "><b>${item.secondParent?.firstName || ""} ${item.secondParent?.lastName || ""}</b></p>
                <p class="mb-0 text-sm ">${item.secondParent?.email || ""}</p>
                <p class="mb-0 text-sm ">${item.secondParent?.phone || ""}</p>
            </div>
            <div class="col-md-2 border-secondary border-end">
                 <p class="mb-0 text-sm " >${item.child?.firstName || "Prénom inconnu"} ${item.child?.lastName || ""}</p>
            </div>

            <div class="col-md-1 border-secondary border-end">
                 <p class="mb-0 text-sm ">${item.child?.birthDate ? new Date(item.child.birthDate).toLocaleDateString() : ""}</p>
            </div>
            <div class="col-md-2 border-secondary border-end">
                <p class="mb-0 text-sm ">${item.company?.name || ""}</p>
                <p class="mb-0 text-sm ">${item.company?.address || ""}</p>
            </div>
            <div class="col-md-2">
                <span class="badge bg-info">${item.status || "NON DEFINI"}</span>
            </div>
        </div>
    `;
  }).join("");

  document.getElementById("declarations").innerHTML = 
  HEADER + declarationsAsHtml;
}
