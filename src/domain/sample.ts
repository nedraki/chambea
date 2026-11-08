import type { CV } from './model';
// Unofficial editorial demo. Public sources are documented in README.md.
export const sampleCV = {
  "schemaVersion": 1,
  "contact": {
    "name": "Benito Martinez",
    "email": "bad.bunny@example.com",
    "phone": "+1 202-555-0147",
    "location": "Puerto Rico",
    "languages": "Spanish, English",
    "additionalInfo": "Recording Artist · Songwriter · Performer\nWebsite: https://example.com/bad-bunny\nUnofficial demonstration CV",
    "links": [
      {
        "id": "l1",
        "label": "Artist profile",
        "url": "https://www.grammy.com/artists/bad-bunny/243129/"
      }
    ]
  },
  "summary": "Puerto Rican recording artist bringing Spanish-language music to a global audience through reggaeton, Latin trap, and Caribbean sounds. Combines distinctive songwriting, ambitious album concepts, and large-scale live performance. Spotify’s most-streamed global artist in 2020, 2021, 2022, and 2025, with a body of work recognized by the Recording Academy.",
  "technologies": [
    {
      "id": "t1",
      "name": "Songwriting"
    },
    {
      "id": "t2",
      "name": "Vocal performance"
    },
    {
      "id": "t3",
      "name": "Studio recording"
    },
    {
      "id": "t4",
      "name": "Live performance"
    }
  ],
  "experiences": [
    {
      "id": "e1",
      "role": "Recording Artist & Songwriter",
      "company": "Bad Bunny",
      "location": "Puerto Rico · International",
      "start": "2016",
      "end": "Present",
      "achievements": [
        {
          "id": "a1",
          "text": "Reached 19.8 billion Spotify streams in 2025, earning the platform’s global top-artist position for a fourth year.",
          "technologyIds": [
            "t1",
            "t2"
          ]
        },
        {
          "id": "a2",
          "text": "Became the first artist to lead Spotify’s annual global artist ranking for three consecutive years (2020–2022); surpassed 18.5 billion streams in 2022.",
          "technologyIds": []
        },
        {
          "id": "a4",
          "text": "Developed a Spanish-language catalogue spanning reggaeton, Latin trap, and Puerto Rican musical traditions, with collaborations and screen work extending its reach.",
          "technologyIds": [
            "t3"
          ]
        }
      ]
    },
    {
      "id": "e3",
      "role": "Live Performer",
      "company": "Selected international performances",
      "location": "United States · International",
      "start": "2023",
      "end": "",
      "achievements": [
        {
          "id": "a5",
          "text": "Headlined Coachella in 2023, becoming the first Latino solo artist to headline the festival.",
          "technologyIds": [
            "t4"
          ]
        }
      ]
    },
    {
      "id": "e2",
      "role": "Actor",
      "company": "Selected screen credits",
      "location": "International",
      "start": "2021",
      "end": "2022",
      "achievements": [
        {
          "id": "a3",
          "text": "Expanded into screen acting with appearances in Narcos: Mexico (2021) and Bullet Train (2022).",
          "technologyIds": []
        }
      ]
    }
  ],
  "projects": [
    {
      "id": "pr3",
      "name": "DeBÍ TiRAR MáS FOToS (2025)",
      "url": "https://newsroom.spotify.com/2025-12-03/wrapped-bad-bunny-top-artist-album/",
      "achievements": [
        {
          "id": "pa4",
          "text": "Placed Puerto Rican identity and musical heritage at the center of an album blending contemporary urban music with Caribbean traditions.",
          "technologyIds": [
            "t1",
            "t2",
            "t3"
          ]
        },
        {
          "id": "pa5",
          "text": "Ranked as Spotify’s most-streamed album globally in 2025.",
          "technologyIds": []
        }
      ]
    },
    {
      "id": "pr1",
      "name": "Un Verano Sin Ti (2022)",
      "url": "https://www.grammy.com/artists/bad-bunny/243129/",
      "achievements": [
        {
          "id": "pa1",
          "text": "Studio album recognized with Best Música Urbana Album at the 2023 GRAMMY Awards.",
          "technologyIds": [
            "t2",
            "t3"
          ]
        },
        {
          "id": "pa3",
          "text": "Finished 2022 as Spotify’s most-streamed album globally, connecting a Caribbean-inspired album concept with a worldwide audience.",
          "technologyIds": []
        }
      ]
    },
    {
      "id": "pr2",
      "name": "YHLQMDLG (2020)",
      "url": "https://www.grammy.com/news/bad-bunny-wins-best-latin-pop-or-urban-album-yhlqmdlg-2021-grammy-awards-show/",
      "achievements": [
        {
          "id": "pa2",
          "text": "Earned Best Latin Pop or Urban Album at the 2021 GRAMMY Awards, marking his first GRAMMY win.",
          "technologyIds": [
            "t1"
          ]
        }
      ]
    }
  ],
  "projectTools": [
    "t1",
    "t2",
    "t3"
  ],
  "education": [
    {
      "id": "ed-demo",
      "degree": "[Título, carrera o formación cursada]",
      "institution": "[Nombre de la institución]",
      "start": "[Año de inicio]",
      "end": "[Año de finalización o En curso]",
      "details": "[Añade una especialización, un proyecto académico o un logro relevante. Esta entrada es una guía para completar tu CV; no representa estudios verificados de Bad Bunny.]"
    }
  ],
  "certifications": [],
  "presentations": []
} satisfies CV;
