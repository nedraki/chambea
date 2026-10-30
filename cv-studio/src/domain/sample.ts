import type { CV } from './model';
export const sampleCV = {
  "schemaVersion": 1,
  "contact": {
    "name": "Wile E. Coyote",
    "email": "wile.e.coyote@example.com",
    "phone": "",
    "location": "Painted Desert, Arizona (fictional)",
    "languages": "English, elaborate diagrams",
    "additionalInfo": "Genius, self-certified\nFictional demonstration profile",
    "links": [
      {
        "id": "l1",
        "label": "Portfolio",
        "url": "https://example.com"
      }
    ]
  },
  "summary": "Inventive desert engineer specializing in ambitious pursuit systems, rapid prototyping, and exceptionally persistent field testing. Turns every unexpected landing into a new design iteration. Fictional, unofficial demo inspired by Looney Tunes.",
  "technologies": [
    {
      "id": "t1",
      "name": "Rocket propulsion"
    },
    {
      "id": "t2",
      "name": "Mechanical design"
    },
    {
      "id": "t3",
      "name": "Technical drawing"
    },
    {
      "id": "t4",
      "name": "Failure analysis"
    }
  ],
  "experiences": [
    {
      "id": "e1",
      "role": "Lead Pursuit Engineer",
      "company": "Independent Desert Research",
      "location": "Painted Desert",
      "start": "1949",
      "end": "Present",
      "achievements": [
        {
          "id": "a1",
          "text": "Designed rocket-powered skates for rapid pursuit; identified braking as the next research priority.",
          "technologyIds": [
            "t1",
            "t2"
          ]
        },
        {
          "id": "a2",
          "text": "Documented every canyon-related setback with detailed failure analysis and design review practices.",
          "technologyIds": [
            "t3",
            "t4"
          ]
        }
      ]
    },
    {
      "id": "e2",
      "role": "Field Product Tester",
      "company": "ACME Equipment (fictional)",
      "location": "Desert test range",
      "start": "1948",
      "end": "1949",
      "achievements": [
        {
          "id": "a3",
          "text": "Evaluated portable tunnels, giant magnets, and spring-loaded launchers under demanding field conditions.",
          "technologyIds": [
            "t2",
            "t4"
          ]
        }
      ]
    }
  ],
  "projects": [
    {
      "id": "pr1",
      "name": "Road Runner Detection System",
      "url": "https://example.com/road-runner-detector",
      "achievements": [
        {
          "id": "pa1",
          "text": "Prototyped a birdseed-triggered alert system with a deliberately generous testing budget.",
          "technologyIds": [
            "t3",
            "t4"
          ]
        }
      ]
    },
    {
      "id": "pr2",
      "name": "Portable Tunnel Prototype",
      "url": "https://example.com/portable-tunnel",
      "achievements": [
        {
          "id": "pa2",
          "text": "Painted a convincing tunnel entrance; investigating why only the intended subject can pass through.",
          "technologyIds": [
            "t2"
          ]
        }
      ]
    }
  ],
  "projectTools": [
    "t1"
  ],
  "education": [
    {
      "id": "ed1",
      "degree": "Independent Studies in Applied Mechanics",
      "institution": "School of Hard Landings (fictional)",
      "start": "1946",
      "end": "1948",
      "details": "Research focus: gravity, momentum, and unexpectedly short flight times."
    }
  ],
  "certifications": [
    {
      "id": "c1",
      "name": "Certified Super Genius (self-awarded)",
      "issuer": "Wile E. Coyote",
      "date": "1949",
      "url": ""
    }
  ],
  "presentations": [
    {
      "id": "p1",
      "title": "Lessons from a Thousand Prototypes",
      "conference": "Desert Inventors Symposium (fictional)",
      "date": "2026",
      "location": "Canyon Rim",
      "url": ""
    }
  ]
} satisfies CV;
