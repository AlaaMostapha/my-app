import { SteppedLineTo } from "react-lineto";
import LineTo from "react-lineto";
import Card from "./Card";
import Xarrow from "react-xarrows";
import "./App.css";
const data = {
  head: {
    title: "المدير التنفيذي",
    subtitle: "د. عبدالعزيز بن محمد السويلم",
    code: "33",
    color: "#004A81",
    department: {
      title: "اسم الإدارة",
      subtitle: "اسم المدير",
      code: "33",
      color: "#DE8C21",
    },
  },
  sub_heads: [
    {
      title: "اسم11 الإدارة",
      subtitle: "اسم المدير",
      code: "33",
      color: "#00A19B",
      children: [
        {
          title: "اسم الإدارة",
          subtitle: "اسم المدير",
          code: "33",
          color: "#D0D2D3",
        },
        {
          title: "اسم الإدارة",
          subtitle: "اسم المدير",
          code: "33",
          color: "#D0D2D3",
        },
      ],
    },
    {
      title: "اسم الإدارة",
      subtitle: "اسم المدير",
      code: "33",
      color: "#00A19B",
      children: [
        {
          title: "اسم الإدارة",
          subtitle: "اسم المدير",
          code: "33",
          color: "#D0D2D3",
        },
        {
          title: "اسم الإدارة",
          subtitle: "اسم المدير",
          code: "33",
          color: "#D0D2D3",
        },
      ],
    },
    {
      title: "اسم الإدارة",
      subtitle: "اسم المدير",
      code: "33",
      color: "#00A19B",
      children: [
        {
          title: "اسم الإدارة",
          subtitle: "اسم المدير",
          code: "33",
          color: "#D0D2D3",
        },
      ],
    },
    {
      title: "اسم الإدارة",
      subtitle: "اسم المدير",
      code: "33",
      color: "#00A19B",
      children: [
        {
          title: "اسم الإدارة",
          subtitle: "اسم المدير",
          code: "33",
          color: "#D0D2D3",
        },
      ],
    },
    {
      title: "اسم الإدارة",
      subtitle: "اسم المدير",
      code: "33",
      color: "#00A19B",
      children: [
        {
          title: "اسم الإدارة",
          subtitle: "اسم المدير",
          code: "33",
          color: "#D0D2D3",
        },
        {
          title: "اسم الإدارة",
          subtitle: "اسم المدير",
          code: "33",
          color: "#D0D2D3",
        },
        {
          title: "اسم الإدارة",
          subtitle: "اسم المدير",
          code: "33",
          color: "#D0D2D3",
        },
      ],
    },
    {
      title: "اسم الإدارة",
      subtitle: "اسم المدير",
      code: "33",
      color: "#00A19B",
      children: [
        {
          title: "اسم الإدارة",
          subtitle: "اسم المدير",
          code: "33",
          color: "#D0D2D3",
        },
        {
          title: "اسم الإدارة",
          subtitle: "اسم المدير",
          code: "33",
          color: "#D0D2D3",
        },
        {
          title: "اسم الإدارة",
          subtitle: "اسم المدير",
          code: "33",
          color: "#D0D2D3",
        },
      ],
    },
    {
      title: "اسم الإدارة",
      subtitle: "اسم المدير",
      code: "33",
      color: "#004F45",
      children: [],
    },
  ],
  level3: [
    {
      title: "اسم1 الإدارة",
      subtitle: "اسم المدير",
      code: "33",
      color: "#004A81",
    },
    {
      title: "اسم11 الإدارة",
      subtitle: "اسم المدير",
      code: "33",
      color: "#004A81",
      children: [
        {
          title: "اسم  111 الإدارة",
          subtitle: "اسم المدير",
          code: "33",
          color: "#00A19B",
        },
        {
          title: "اسم 112 الإدارة",
          subtitle: "اسم المدير",
          code: "33",
          color: "#00A19B",
          children: [
            {
              title: "اسم1123  الإدارة",
              subtitle: "اسم المدير",
              code: "33",
              color: "#D0D2D3",
            },
          ],
        },
      ],
    },
    {
      title: "اسم الإدارة",
      subtitle: "اسم المدير",
      code: "33",
      color: "#004A81",
      children: [
        {
          title: "اسم الإدارة",
          subtitle: "اسم المدير",
          code: "33",
          color: "#00A19B",
          children: [
            {
              title: "اسم الإدارة",
              subtitle: "اسم المدير",
              code: "33",
              color: "#D0D2D3",
            },
            {
              title: "اسم الإدارة",
              subtitle: "اسم المدير",
              code: "33",
              color: "#D0D2D3",
            },
          ],
        },
        {
          title: "اسم الإدارة",
          subtitle: "اسم المدير",
          code: "33",
          color: "#00A19B",
          children: [
            {
              title: "اسم الإدارة",
              subtitle: "اسم المدير",
              code: "33",
              color: "#D0D2D3",
            },
            {
              title: "اسم الإدارة",
              subtitle: "اسم المدير",
              code: "33",
              color: "#D0D2D3",
            },
            {
              title: "اسم الإدارة",
              subtitle: "اسم المدير",
              code: "33",
              color: "#D0D2D3",
            },
          ],
        },
      ],
    },
  ],
};

function App() {
  return (
    <div className="App mt-5 mb-5">
      <div className="connectors">
        <LineTo
          delay={0}
          from="H1"
          to="end"
          borderColor="#D0D2D3"
          fromAnchor="bottom"
        />
        <LineTo delay={0} from="H1" to="D" borderColor="#D0D2D3" />
      </div>
      <div className="row g-0 mt-5 mb-5">
        <div className="col-md-4 d-flex justify-content-end">
          <Card
            title={data.head.department.title}
            name={data.head.department.subtitle}
            id={data.head.department.code}
            color={data.head.department.color}
            className="D mx-4"
          />
        </div>
        <div className="col-md-4 d-flex justify-content-center">
          <Card
            htmlId={'H1'}
            title={data.head.title}
            name={data.head.subtitle}
            id={data.head.code}
            color={data.head.color}
            className="H1"
          />
        </div>
        <div className="col-md-4"></div>
      </div>
      <div className="row g-0 mb-5">
        {data.sub_heads.map((subhead, ii) => {
          return (
            <div
              className={`col-md-6 row mx-0 ${ii % 2 !== 0 && "justify-content-end"
                }`}
            >
           <Xarrow
                start={`subhead-${ii}`}
                end={"H1"}
                endAnchor={'bottom'}
                path="grid"
                lineColor="#D0D2D3"
                strokeWidth={1}
                showHead={false}
              />
              <div
                align="right"
                className={`col-md-4 ${ii % 2 === 0 ? "order-2" : "order-1"}`}
              >
                <Card
                  htmlId={`subhead-${ii}`}
                  key={ii}
                  title={subhead.title}
                  name={subhead.subtitle}
                  id={subhead.code}
                  color={subhead.color}
                  className={`subhead-${ii} mb-5`}
                />
              </div>
              <div
                align="right"
                className={`col-md-4 ${ii % 2 === 0 ? "order-1 " : "order-2"}`}
              >
                {subhead.children.length > 0 &&
                  subhead.children.map((child, i) => {
                    return (
                      <>
                        <Card
                          key={i}
                          title={child.title}
                          name={child.subtitle}
                          id={child.code}
                          color={child.color}
                          className={`sub${ii}-${i} mb-5`}
                        />
                        <SteppedLineTo
                          delay={0}
                          from={`subhead-${ii}`}
                          to={`sub${ii}-${i}`}
                          orientation="h"
                          borderColor="#D0D2D3"
                        />
                      </>
                    );
                  })}
              </div>
            </div>
          );
        })}
      </div>
      <div className="end mb-5">&nbsp;</div>

      <div className="lvl3">
        <div className="row g-0">
          {data.level3.map((item, ii) => (
            <div className="col-md-4 mt-5 text-center" key={ii}>
              <Card
                title={item.title}
                name={item.subtitle}
                id={item.code}
                color={item.color}
                className={`lvl3-${ii} inline-block mb-5`}
              />
              <SteppedLineTo
                delay={0}
                from={`lvl3-${ii}`}
                to={`end`}
                borderColor="#D0D2D3"
                fromAnchor="50% -3"
              />
              <div className="row g-0 justify-content-around">
                {item.children?.length > 0 &&
                  item.children.map((child, iii) => (
                    <>
                      <div className="col-md-5">
                        <Card
                          key={iii}
                          title={child.title}
                          name={child.subtitle}
                          id={child.code}
                          color={child.color}
                          className={`child-lvl1-${ii}-${iii} mb-5`}
                        />
                        {child?.children?.length > 0 &&
                          child.children.map((secChild, i) => (
                            <>
                              <Card
                                key={i}
                                title={secChild.title}
                                name={secChild.subtitle}
                                id={secChild.code}
                                color={secChild.color}
                                className={`child-lvl2-${ii}-${i} mb-5`}
                              />
                              {console.log(i, ii, iii)}
                              {console.log(
                                `child-lvl1-${ii}-${iii}`,
                                `child-lvl2-${ii}-${i}`
                              )}
                              {/* <SteppedLineTo
                                delay={0}
                                from={`child-lvl1-${ii}-${iii}`}
                                to={`child-lvl2-${ii}-${i}`}
                                borderColor="#D0D2D3"
                                orientation="h"
                              /> */}
                              <Xarrow
                                start={`child-lvl1-${ii}-${iii}`}
                                end={`child-lvl2-${ii}-${i}`} //or an id
                                path="grid"
                                lineColor="#D0D2D3"
                                strokeWidth={1}
                                showHead={false}
                              />
                            </>
                          ))}
                      </div>
                    </>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
