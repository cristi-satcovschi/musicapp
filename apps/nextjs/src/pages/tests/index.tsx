import { useEffect } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { el } from "@elemaudio/core";
import WebRenderer from "@elemaudio/web-renderer";

const testSounds = async () => {
  if (
    !window ||
    typeof AudioContext === "undefined" ||
    typeof window.AudioContext === "undefined"
  ) {
    return;
  }

  const ctx = new AudioContext();
  ctx.resume();

  const core = new WebRenderer();

  function sineTone(t) {
    return el.sin(el.mul(2 * Math.PI, t));
  }

  core.on("load", function () {
    const tone = sineTone(el.phasor(440));
    core.render(tone);
  });

  (async function main() {
    // Here we initialize our WebRenderer instance and connect the resulting
    // Web Audio node to our AudioContext destination.
    const node = await core.initialize(ctx, {
      numberOfInputs: 0,
      numberOfOutputs: 1,
      outputChannelCount: [2],
    });

    node.connect(ctx.destination);

    console.log("test");
  })();
};

const Tests: NextPage = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      testSounds();
    }
  }, []);

  return (
    <>
      <Head>
        <title>Tests</title>
        <meta name="description" content="App Tests" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-row justify-between border-b px-12 py-8">
        <h2 className="text-4xl font-semibold">Tests</h2>
      </div>
    </>
  );
};

export default Tests;
