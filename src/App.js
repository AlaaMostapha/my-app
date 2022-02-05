import { SteppedLineTo } from "react-lineto";
import LineTo from "react-lineto";
import Card from "./Card";
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
              className={`col-md-6 row mx-0 ${
                ii % 2 != 0 && "justify-content-end"
              }`}
            >
              {console.log(
                data.sub_heads.length % 2 != 0 &&
                  ii == data.sub_heads.length - 1
              )}
              {data.sub_heads.length % 2 != 0 &&
              ii == data.sub_heads.length - 1 ? (
                <>
                  {console.log("iiiii", ii)}
                  <SteppedLineTo
                    delay={0}
                    from={`subhead-${ii}`}
                    to={`end`}
                    orientation="h"
                    borderColor="#D0D2D3"
                  />
                </>
              ) : ii % 2 == 0 ? (
                <LineTo
                  delay={0}
                  from={`subhead-${ii}`}
                  to={`subhead-${ii + 1}`}
                  orientation="h"
                  borderColor="#D0D2D3"
                />
              ) : null}
              <div
                align="right"
                className={`col-md-4 ${ii % 2 == 0 ? "order-2" : "order-1"}`}
              >
                <Card
                  key={ii}
                  title={subhead.title}
                  name={subhead.subtitle}
                  id={subhead.code}
                  color={subhead.color}
                  className={`subhead-${ii} mb-4`}
                />
              </div>
              <div
                align="right"
                className={`col-md-4 ${ii % 2 == 0 ? "order-1 " : "order-2"}`}
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
                          className={`sub${ii}-${i} mb-4`}
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
    </div>
  );
}

export default App;
