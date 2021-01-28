type WorkDetailProps = {
  title: string;
  roles: string[];
  tools: string[];
  img: string;
  body: React.ReactNode;
};

export default function WorkDetail({ title, roles, tools, img, body }: WorkDetailProps) {
  return (
    <div className="max-w-screen-xl mx-auto text-white fixed inset-0 pt-12 z-20">
      <div className="md:flex items-center h-full px-4 md:p-8 overflow-y-auto">
        <div className="md:w-1/2 pt-8">
          <h1 className="font-display text-3xl lg:text-5xl text-shadow-sw lg:text-shadow-lw">{title}</h1>
          <ul className="mt-4 lg:mt-8">
            {roles.map((role, i) => (
              <li
                key={i}
                className="inline-block text-sm lg:text-base border border-white rounded px-2 lg:px-3 mr-1 lg:mr-2 mb-1 lg:mb-2"
              >
                {role}
              </li>
            ))}
          </ul>
          <ul className="mt-2 lg:mt-4">
            {tools.map((tool, i) => (
              <li
                key={i}
                className="inline-block text-sm lg:text-base bg-white bg-opacity-30 rounded px-2 lg:px-3 mr-1 lg:mr-2 mb-1 lg:mb-2"
              >
                {tool}
              </li>
            ))}
          </ul>
          <div className="md:hidden w-full pt-3/4 mt-8 bg-white rounded-md shadow-sw relative overflow-hidden">
            <img src={img} alt={title} className="w-full h-full absolute inset-0 object-cover" />
          </div>
          <div className="mt-8 lg:text-xl">{body}</div>
        </div>
        <div className="hidden md:block w-1/2 pt-3/8 bg-white rounded-md shadow-sw relative overflow-hidden ml-8 lg:ml-12">
          <img src={img} alt={title} className="w-full h-full absolute inset-0 object-cover" />
        </div>
      </div>
    </div>
  );
}
