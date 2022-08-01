import { useState } from "react";
import StyleGuidesPage from ".";
import { Tab } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Tabs() {
  let [categories] = useState({
    Recent: [
      {
        id: 1,
        title: "Does drinking coffee make you smarter?",
        date: "5h ago",
        commentCount: 5,
        shareCount: 2,
      },
      {
        id: 2,
        title: "So you've bought coffee... now what?",
        date: "2h ago",
        commentCount: 3,
        shareCount: 2,
      },
    ],
    Popular: [
      {
        id: 1,
        title: "Is tech making coffee better or worse?",
        date: "Jan 7",
        commentCount: 29,
        shareCount: 16,
      },
      {
        id: 2,
        title: "The most innovative things happening in coffee",
        date: "Mar 19",
        commentCount: 24,
        shareCount: 12,
      },
    ],
    Trending: [
      {
        id: 1,
        title: "Ask Me Anything: 10 answers to your questions about coffee",
        date: "2d ago",
        commentCount: 9,
        shareCount: 5,
      },
      {
        id: 2,
        title: "The worst advice we've ever heard about coffee",
        date: "4d ago",
        commentCount: 1,
        shareCount: 2,
      },
    ],
  });
  return (
    <div className="styleguides-block">
      <div className="layer-x" />
      <div className="layer-y" />
      <div className="layer-top">Tags</div>
      <div className="layer-content">
        <div className="layer-content-inner">
          <div className="layer-bg" />
          <div className="styleguides-group">
            <div className="styleguides-group-item">
              <p className="styleguides-group-item-title">Tag Types</p>
              <div className="w-full max-w-md pt-3">
                <Tab.Group>
                  <Tab.List className="field has-addons">
                    {Object.keys(categories).map((category) => (
                      <p className="control">
                        <Tab
                          key={category}
                          className={({ selected }) =>
                            classNames(
                              "button is-regular",
                              selected ? "is-active" : ""
                            )
                          }
                        >
                          {category}
                        </Tab>
                      </p>
                    ))}
                  </Tab.List>
                  <Tab.Panels className="mt-1">
                    {Object.values(categories).map((posts, idx) => (
                      <Tab.Panel key={idx} className={classNames(" bg-white")}>
                        <ul>
                          {posts.map((post) => (
                            <li
                              key={post.id}
                              className="relative rounded-md p-3 hover:bg-gray-100"
                            >
                              <h3 className="text-sm font-medium leading-5">
                                {post.title}
                              </h3>

                              <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500">
                                <li>{post.date}</li>
                                <li>&middot;</li>
                                <li>{post.commentCount} comments</li>
                                <li>&middot;</li>
                                <li>{post.shareCount} shares</li>
                              </ul>

                              <a
                                href="#"
                                className={classNames(
                                  "absolute inset-0 rounded-md",
                                  "ring-blue-400 focus:z-10 focus:outline-none focus:ring-2"
                                )}
                              />
                            </li>
                          ))}
                        </ul>
                      </Tab.Panel>
                    ))}
                  </Tab.Panels>
                </Tab.Group>
              </div>

              <div className="w-full max-w-md pt-3">
                <Tab.Group>
                  <Tab.List className="field has-addons">
                    {Object.keys(categories).map((category) => (
                      <p className="control">
                        <Tab
                          key={category}
                          className={({ selected }) =>
                            classNames(
                              "button is-minimal",
                              selected ? "is-active" : ""
                            )
                          }
                        >
                          {category}
                        </Tab>
                      </p>
                    ))}
                  </Tab.List>
                  <Tab.Panels className="mt-1">
                    {Object.values(categories).map((posts, idx) => (
                      <Tab.Panel key={idx} className={classNames(" bg-white")}>
                        <ul>
                          {posts.map((post) => (
                            <li
                              key={post.id}
                              className="relative rounded-md p-3 hover:bg-gray-100"
                            >
                              <h3 className="text-sm font-medium leading-5">
                                {post.title}
                              </h3>

                              <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500">
                                <li>{post.date}</li>
                                <li>&middot;</li>
                                <li>{post.commentCount} comments</li>
                                <li>&middot;</li>
                                <li>{post.shareCount} shares</li>
                              </ul>

                              <a
                                href="#"
                                className={classNames(
                                  "absolute inset-0 rounded-md",
                                  "ring-blue-400 focus:z-10 focus:outline-none focus:ring-2"
                                )}
                              />
                            </li>
                          ))}
                        </ul>
                      </Tab.Panel>
                    ))}
                  </Tab.Panels>
                </Tab.Group>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Tabs.getLayout = function getLayout(page) {
  return <StyleGuidesPage>{page}</StyleGuidesPage>;
};
