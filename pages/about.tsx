import Layout from "../components/layout";

export default function About() {
  const { img, text, tools } = {
    img: "https://dummyimage.com/640x640/aaaaaa/000000",
    text: "Hello",
    tools: [
      {
        category: "Languages",
        names: ["HTML5", "CSS3", "JavaScript", "TypeScript"],
      },
    ],
  };

  return (
    <Layout pageTitle="About">
      <h1 className="w-32 rounded-full mx-auto shadow-sw">
        <img src={img} alt="Nozomi Mail" className="w-32 ring-4 rounded-full ring-white" />
      </h1>
      <p className="mt-8">{text}</p>
      <h2 className="font-display text-2xl text-shadow-sw text-center mt-20">Skills and Tools</h2>
      {tools.map((tool) => (
        <div className="border border-white rounded-md mt-8">
          <h3 className="bg-white bg-opacity-30 py-1 px-4 text-center">{tool.category}</h3>
          <ul className="list list-disc list-inside flex flex-wrap py-2">
            {tool.names.map((name) => (
              <li className="py-1 px-4">{name}</li>
            ))}
          </ul>
        </div>
      ))}
    </Layout>
  );
}
