const DECLARATIONS = [
  "{{repeat(5, 7)}}",
  {
    id: "{{objectId()}}",
    status: '{{random("NOUVEAU", "VALIDE", "REJETEE", "MODIFICATION")}}',
    firstParent: {
      id: "{{objectId()}}",
      gender: "{{gender()}}",
      firstName: "{{firstName()}}",
      lastName: "{{surname()}}",
      email: "{{email()}}",
      phone: "+1 {{phone()}}",
    },
    secondParent: {
      id: "{{objectId()}}",
      gender: "{{gender()}}",
      firstName: "{{firstName()}}",
      lastName: "{{surname()}}",
      email: "{{email()}}",
      phone: "+1 {{phone()}}",
    },
    child: {
      id: "{{objectId()}}",
      gender: "{{gender()}}",
      firstName: "{{firstName()}}",
      lastName: "{{surname()}}",
      birthDate:
        '{{date(new Date(2014, 0, 1), new Date(), "YYYY-MM-ddThh:mm:ss Z")}}',
    },
    company: {
      name: "{{company().toUpperCase()}}",
      address:
        "{{integer(100, 999)}} {{street()}}, {{city()}}, {{state()}}, {{integer(100, 10000)}}",
    },
    about: '{{lorem(5, "words")}}',
    registered:
      '{{date(new Date(2014, 0, 1), new Date(), "YYYY-MM-ddThh:mm:ss Z")}}',
  },
];

function recharger() {
  console.log("recharger les declarations");
  const declarationsAsHtml = DECLARATIONS.map((item, index)=>{
        return `
         <div class="row border border-primary">
                    <div class="col-md-1 border-secondary border-end">
                        ${item.registered}
                    </div>
                    <div class="col-md-2 border-secondary border-end">
                        <p>${item.registered}</p>
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
                `;
  });
}
