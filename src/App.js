import { SteppedLineTo } from "react-lineto";
import LineTo from "react-lineto";
import { Grid, Paper , Box } from "@material-ui/core";
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
    <Box  className="App" sx={{ mt: '3rem' , mb:'3rem' }}>
      <Grid item xs={1}></Grid>
      <Grid item xs={11}>
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
      <Grid container className="mb-4">
        <Grid item xs={4} align="center">
          <Card
            title={data.head.department.title}
            name={data.head.department.subtitle}
            id={data.head.department.code}
            color={data.head.department.color}
            className="D mx-4"
          />
        </Grid>
        <Grid item xs={4} align="center">
          <Card
            htmlId={"H1"}
            title={data.head.title}
            name={data.head.subtitle}
            id={data.head.code}
            color={data.head.color}
            className="H1"
          />
        </Grid>
        <Grid item xs={4}></Grid>
      </Grid>
      {/* <Grid item xs={10}> */}
      <Grid container className="mb-4 px-5">
        {data.sub_heads.map((subhead, i) => {
          return (
            <Grid
            container
            item xs={6}
            justifyContent={`${i % 2 !== 0 && "flex-end"
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
              <Grid
                item
                justifyContent="flex-end"
                xs={5}
                className={`${i % 2 === 0 ? "order-2 text-start" : "order-1"}`}
              >
                <Card
                  htmlId={`subhead-${i}`}
                  key={i}
                  title={subhead.title}
                  name={subhead.subtitle}
                  id={subhead.code}
                  color={subhead.color}
                  className={`mb-4`}
                />
              </Grid>
              <Grid
                item
                justifyContent="flex-end"
                xs={5}
                className={`${i % 2 === 0 ? "order-1" : "order-2 text-start"}`}
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
                        className={`mb-4`}
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
              </Grid>
            </Grid>
          );
        })}
      </Grid>
      {/* </Grid> */}
      <Grid className="end mb-4">&nbsp;</Grid>
      <Grid className="lvl3 px-5">
        <Grid container>
          {data.level3.map((item, i) => (
            <Grid item xs={4} className="mt-5 text-center" key={i}>
              <Card
                title={item.title}
                name={item.subtitle}
                id={item.code}
                color={item.color}
                className={`lvl3-${i} mb-4`}
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
              {/* here -->row */}
              <Grid container className="row g-0 px-4"
              justifyContent="space-between">
                {item.children?.map((child, j) => (
                  <>
                    <Grid item xs={5} className="mb-4">
                      <Card
                        key={`${i}-${j}`}
                        title={child.title}
                        name={child.subtitle}
                        id={child.code}
                        color={child.color}
                        className={`mb-4`}
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
                            className={`mb-4`}
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
                    </Grid>
                  </>
                ))}
                <div className={`end-lvl3-${i}`}></div>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Grid>
      </Grid>
    </Box>
  );
}

export default App;
