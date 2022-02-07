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
      children: [
        {
          title: "اسم  111 الإدارة",
          subtitle: "اسم المدير",
          code: "33",
          color: "#00A19B",
        },
        {
          title: "اسم  111 الإدارة",
          subtitle: "اسم المدير",
          code: "33",
          color: "#00A19B",
        },
      ],
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

        <SteppedLineTo
          delay={0}
          from={`child-lvl1-2-0`}
          to={`child-lvl2-0-0`}
          orientation="v"
          borderColor="#D0D2D3"
        />
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
            htmlId={"H1"}
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
        {data.sub_heads.map((subhead, i) => {
          return (
            <div
              className={`col-md-6 row mx-0 ${i % 2 !== 0 && "justify-content-end"
                }`}
            >
              <Xarrow
                start={`subhead-${i}`}
                end={"H1"}
                endAnchor={"bottom"}
                path="grid"
                lineColor="#D0D2D3"
                strokeWidth={1}
                showHead={false}
              />
              <div
                align="right"
                className={`col-md-4 ${i % 2 === 0 ? "order-2" : "order-1"}`}
              >
                <Card
                  htmlId={`subhead-${i}`}
                  key={i}
                  title={subhead.title}
                  name={subhead.subtitle}
                  id={subhead.code}
                  color={subhead.color}
                  className={`mb-5`}
                />
              </div>
              <div
                align="right"
                className={`col-md-4 ${i % 2 === 0 ? "order-1 " : "order-2"}`}
              >
                {subhead.children?.map((child, j) => {
                  return (
                    <>
                      <Card
                        key={j}
                        title={child.title}
                        name={child.subtitle}
                        id={child.code}
                        color={child.color}
                        className={`mb-5`}
                        htmlId={`sub${i}-${j}`}
                      />
                      <Xarrow
                        start={`sub${i}-${j}`}
                        end={`subhead-${i}`}
                        path="grid"
                        lineColor="#D0D2D3"
                        strokeWidth={1}
                        showHead={false}
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
          {data.level3.map((item, i) => (
            <div className="col-md-4 mt-5 text-center" key={i}>
              <Card
                title={item.title}
                name={item.subtitle}
                id={item.code}
                color={item.color}
                className={`lvl3-${i} mb-5`}
                htmlId={`lvl3-${i}`}
              />
              <SteppedLineTo
                delay={0}
                from={`lvl3-${i}`}
                to={`end`}
                borderColor="#D0D2D3"
                fromAnchor="50% -3"
              />
              <LineTo
                delay={0}
                from={`lvl3-${i}`}
                to={`end-lvl3-${i}`}
                borderColor="#D0D2D3"
                fromAnchor="bottom"
              />
              <div className="row g-0 justify-content-around">
                {item.children?.map((child, j) => (
                  <>
                    <div className="col-md-5 mb-5">
                      <Card
                        key={`${i}-${j}`}
                        title={child.title}
                        name={child.subtitle}
                        id={child.code}
                        color={child.color}
                        className={`mb-5`}
                        htmlId={`child-lvl1-${i}-${j}`}
                      />
                      <Xarrow
                        start={`child-lvl1-${i}-${j}`}
                        end={`lvl3-${i}`}
                        startAnchor={j % 2 === 0 ? 'left' : 'right'}
                        endAnchor={"bottom"}
                        path="grid"
                        lineColor="#D0D2D3"
                        strokeWidth={1}
                        showHead={false}
                      />
                      {child.children?.map((secChild, l) => (
                        <>
                          <Card
                            key={`${i}-${j}-${l}`}
                            title={secChild.title}
                            name={secChild.subtitle}
                            id={secChild.code}
                            color={secChild.color}
                            className={`mb-5`}
                            htmlId={`child-lvl2-${i}-${j}-${l}`}
                          />
                          <Xarrow
                            start={`child-lvl2-${i}-${j}-${l}`}
                            end={`child-lvl1-${i}-${j}`}
                            endAnchor={j % 2 === 0 ? 'left' : 'right'}
                            startAnchor={j % 2 === 0 ? 'left' : 'right'}
                            _cpx1Offset={j % 2 === 0 ? -12 : 12}
                            _cpx2Offset={j % 2 === 0 ? -12 : 12}
                            _extendSVGcanvas={12}
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
                <div className={`end-lvl3-${i}`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
