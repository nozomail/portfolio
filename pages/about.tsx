import Layout from "../components/layout";

type AboutProps = {
  img: string;
  text: string;
  tools: {
    category: string;
    names: string[];
  }[];
};

export default function About({ img, text, tools }: AboutProps) {
  return (
    <Layout pageTitle="About">
      <h1 className="w-32 rounded-full mx-auto shadow-sw">
        <img src={img} alt="Nozomi Mail" className="w-32 ring-4 rounded-full ring-white" />
      </h1>
      <p className="mt-8">{text}</p>
      <h2 className="font-display text-2xl text-shadow-sw text-center mt-20">Skills and Tools</h2>
      {tools.map((tool, i) => (
        <div key={i} className="border border-white rounded-md mt-8">
          <h3 className="bg-white bg-opacity-30 py-1 px-4 text-center">{tool.category}</h3>
          <ul className="list list-disc list-inside flex flex-wrap py-2">
            {tool.names.map((name, j) => (
              <li key={j} className="py-1 px-4">{name}</li>
            ))}
          </ul>
        </div>
      ))}
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${process.env.API_URL}/about/`);
  const data = await res.json();
  const {img, text, tools} = data[0]

  return {
    props: {
      img,
      text,
      tools,
    },
  };
}
