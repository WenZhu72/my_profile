export const profileSections = {
    about: {
        title: "About Me",
        text: "Hi, I'm Wen. I'm a Java Consultant working at Sparta Global, with a background in Computer Science and a strong interest in software development. I enjoy building projects that let me explore different areas of programming, from full-stack web development to GPU programming."
    },
    skills: {
        title: "Skills",
        text: "Languages: Java, C#, Python, JavaScript, TypeScript, SQL\nTools / Technologies: Git, JUnit, Mockito, REST APIs, FastAPI, Next.js, Unity, HLSL / Compute Shaders"
    },
    education: {
        title: "Education",
        institution: "Newcastle University",
        degree: "BSc Computer Science (Game Engineering)",
        dates: "2023 – 2026",
        classification: "First-Class Honours"
    },
    hobbies: {
        title: "Hobbies & Interests",
        text: "I mostly play video games and watch anime. I don't really have hobbies. I should probably get some."
    },
    goals: {
    title: "Goals",
    text: "My goal is to touch more grass."
},
};

export const projects = [
    {
        name: "Real-Time GPU Fluid Simulation",
        description: "My university dissertation project: a real-time fluid simulation developed in Unity using C# and HLSL compute shaders. It uses the GPU to simulate pressure, advection and obstacles, with a focus on performance, stability and scalability.",
        technologies: "Unity • C# • HLSL • Compute Shaders • GPU Programming"
    },
    {
        name: "RecommendMeAnime",
        description: "A full-stack anime discovery and recommendation website. It uses a Next.js and TypeScript frontend, a FastAPI/Python backend and the AniList GraphQL API to help users find anime based on their preferences. It also includes a watchlist stored locally in the browser.",
        technologies: "Next.js • TypeScript • Python • FastAPI • Tailwind CSS • GraphQL • AniList API",
        github: "https://github.com/WenZhu72/RecommendMeAnime"
    }
];
