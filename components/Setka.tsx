import { useMemo } from "react";
import {Platform} from "react-native";
import {Skia, Line, vec, useFonts, Paragraph, TextAlign, Circle} from "@shopify/react-native-skia";

// Example from https://shopify.github.io/react-native-skia/docs/shapes/path/
const Setka = () => {

    // const customFontMgr = useFonts({
    //     Poppins: [
    //       require("./../assets/fonts/Poppins-Bold.ttf")
    //     ],
    //     Noto: [require("./../assets/fonts/SpaceMono-Regular.ttf")],
    //   });
      
    // const paragraph = Skia.ParagraphBuilder.Make()
    //     .addText("Hello Skia")
    //     .build();


    // const paragraph = useMemo(() => {
    //     // Are the font loaded already?
    //     // Are the font loaded already?
    //     // if (!SpaceMono) {
    //     //     return null;
    //     // }

    //     const paragraphStyle = {
    //       textAlign: TextAlign.Center
    //     };
    //     const textStyle = {
    //       color: Skia.Color("black"),
    //       //fontFamilies: ["Poppins"],
    //       fontSize: 50,
    //     };
    //     return Skia.ParagraphBuilder.Make(paragraphStyle)
    //       .pushStyle(textStyle)
    //       .addText("Say Hello to ")
    //       .pop()
    //       .build();
    // }, []);

    const lineStart = 50;
    const lineEnd = 150;

    const horizontalCenter = 50;
    const horizontalCenter2 = 70;
    const horizontalCenter3 = 90;
    const horizontalCenter4 = 110;
    const horizontalCenter5 = 130;
    const horizontalCenter6 = 150;

    
    const lineStart2 = 50;
    const lineEnd2 = 150;

    const verticalCenter = 50;
    const verticalCenter2 = 70;
    const verticalCenter3 = 90;
    const verticalCenter4 = 110;
    const verticalCenter5 = 130;
    const verticalCenter6 = 150;

    const r = 5;

    return (
        <>
            {/* <Paragraph paragraph={paragraph} x={0} y={0} width={300} /> */}

            {/* Горизонтальные линии */}
            <Line
                p1={vec(lineStart, verticalCenter)}
                p2={vec(lineEnd, verticalCenter)}
                strokeWidth={4}
                color={"black"}
            />

            <Line
                p1={vec(lineStart, verticalCenter2)}
                p2={vec(lineEnd, verticalCenter2)}
                strokeWidth={2}
                color={"black"}
            />

            <Line
                p1={vec(lineStart, verticalCenter3)}
                p2={vec(lineEnd, verticalCenter3)}
                strokeWidth={2}
                color={"black"}
            />

            <Line
                p1={vec(lineStart, verticalCenter4)}
                p2={vec(lineEnd, verticalCenter4)}
                strokeWidth={2}
                color={"black"}
            />

            <Line
                p1={vec(lineStart, verticalCenter5)}
                p2={vec(lineEnd, verticalCenter5)}
                strokeWidth={2}
                color={"black"}
            />

            <Line
                p1={vec(lineStart, verticalCenter6)}
                p2={vec(lineEnd, verticalCenter6)}
                strokeWidth={2}
                color={"black"}
            />

        {/* Вертикальные линии */}
            <Line
                p1={vec(horizontalCenter, lineStart2)}
                p2={vec(horizontalCenter, lineEnd2)}
                strokeWidth={2}
                color={"black"}
            />

            <Line
                p1={vec(horizontalCenter2, lineStart2)}
                p2={vec(horizontalCenter2, lineEnd2)}
                strokeWidth={2}
                color={"black"}
            />

            <Line
                p1={vec(horizontalCenter3, lineStart2)}
                p2={vec(horizontalCenter3, lineEnd2)}
                strokeWidth={2}
                color={"black"}
            />

            <Line
                p1={vec(horizontalCenter4, lineStart2)}
                p2={vec(horizontalCenter4, lineEnd2)}
                strokeWidth={2}
                color={"black"}
            />

            <Line
                p1={vec(horizontalCenter5, lineStart2)}
                p2={vec(horizontalCenter5, lineEnd2)}
                strokeWidth={2}
                color={"black"}
            />

            <Line
                p1={vec(horizontalCenter6, lineStart2)}
                p2={vec(horizontalCenter6, lineEnd2)}
                strokeWidth={2}
                color={"black"}
            />


            <Circle cx={70} cy={80} r={r} color="blue" />
            <Circle cx={90} cy={80} r={r} color="blue" />

            <Circle cx={70} cy={100} r={r} color="blue" />
        </>
        
    );
};

export default Setka;