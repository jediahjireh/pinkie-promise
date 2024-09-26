"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Confetti from "./Confetti";
import toast from "react-hot-toast";

export default function PinkiePromise() {
  const [step, setStep] = useState(1);
  const [promiser1, setPromiser1] = useState("");
  const [promiser2, setPromiser2] = useState("");
  const [promise, setPromise] = useState("");
  const [promiser, setPromiser] = useState("");
  // state to track if pinkie promise (drag and drop) captcha is completed
  const [pinkiePromise, setPinkiePromise] = useState(false);
  const [fireConfetti, setFireConfetti] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) setStep(step + 1);
  };

  // function to handle drag start
  function handleDragStart(e: React.DragEvent<HTMLImageElement>) {
    e.dataTransfer.setData("text/plain", "hand");
    e.stopPropagation();
  }

  // function to handle drag over
  function handleDragOver(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    e.stopPropagation();
  }

  // function to handle drop event
  function handleDrop(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    e.stopPropagation();
    const data = e.dataTransfer.getData("text/plain");

    // typecast e.target to an HTMLElement to access getBoundingClientRect
    const dropArea = (e.target as HTMLElement).getBoundingClientRect();

    // calculate the drop point relative to the right side of the drop area
    const dropX = e.clientX - dropArea.left;
    const dropY = e.clientY - dropArea.top;

    // threshold for correct drop (adjust value as needed if image size changes)
    const threshold = 30;

    // check if the drop is within the threshold on the right side of the left image
    if (
      data === "hand" &&
      dropX >= dropArea.width - threshold &&
      dropX <= dropArea.width &&
      dropY >= 0 &&
      dropY <= dropArea.height
    ) {
      setPinkiePromise(true);
    }
  }

  // effect to trigger success actions when pinkie promise is true
  useEffect(() => {
    if (pinkiePromise) {
      toast.success("Pinkie Promised", {
        style: {
          border: "1px solid #F8BBD0",
          padding: "16px",
          color: "#F48FB1",
          backgroundColor: "#FFEBEE",
        },
        iconTheme: {
          primary: "#F48FB1",
          secondary: "#FFEBEE",
        },
      });
      setFireConfetti(true);
      // stops confetti after 3 seconds
      setTimeout(() => setFireConfetti(false), 8000);
    }
  }, [pinkiePromise]);

  return (
    <div className="min-h-screen font-mickey bg-pink-50 flex items-center justify-center px-4 relative overflow-hidden">
      {/* animated pink background */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-8 h-8 bg-pink-300 rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 360],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}

      <div className="max-w-md w-full bg-pink-100 rounded-3xl shadow-lg p-8 relative text-gray-500">
        {step < 3 && (
          <h1 className="text-4xl font-bold text-center mb-8 text-pink-500">
            Pinkie Promise
          </h1>
        )}

        <form onSubmit={handleSubmit} className="space-y-6 relative">
          {step === 1 && (
            <>
              <input
                type="text"
                value={promiser1}
                onChange={(e) => setPromiser1(e.target.value)}
                placeholder="Promiser/Promisee 1"
                className="w-full p-3 border-2 border-pink-400 rounded-full text-lg bg-white"
                required
              />
              <input
                type="text"
                value={promiser2}
                onChange={(e) => setPromiser2(e.target.value)}
                placeholder="Promiser/Promisee 2"
                className="w-full p-3 border-2 border-pink-400 rounded-full text-lg bg-white"
                required
              />
            </>
          )}

          {step === 2 && (
            <textarea
              value={promise}
              onChange={(e) => setPromise(e.target.value)}
              placeholder="What's being promised?"
              className="w-full p-3 border-2 border-pink-400 rounded-2xl text-lg h-32 resize-none bg-white"
              required
            />
          )}

          {step === 3 && (
            <div className="space-y-4">
              <p className="text-2xl font-bold text-center text-pink-500">
                {promiser === "both" ? (
                  <>
                    <em>{promiser1}</em> and <em>{promiser2}</em> PINKIE
                    promise:
                  </>
                ) : (
                  <>
                    <em>{promiser}</em>, do you PINKIE promise{" "}
                    <em>{promiser === promiser1 ? promiser2 : promiser1}</em> :
                  </>
                )}
              </p>
              <p className="text-xl text-center">{promise}</p>
              <div className="flex justify-center space-x-4">
                {pinkiePromise ? (
                  <div className="w-32 h-full">
                    <motion.div
                      animate={{ rotate: [-5, 5] }}
                      transition={{
                        repeat: Infinity,
                        duration: 1,
                        repeatType: "reverse",
                      }}
                    >
                      <Image
                        src="./pinkie-promise.svg"
                        alt="Pinkie Promise"
                        className="w-full"
                        width={100}
                        height={100}
                      />
                    </motion.div>
                  </div>
                ) : (
                  <>
                    {/* hand on the left */}
                    <div
                      onDrop={handleDrop}
                      onDragOver={handleDragOver}
                      className="w-32 h-full"
                    >
                      <motion.div
                        animate={{ rotate: [-5, 5] }}
                        transition={{
                          repeat: Infinity,
                          duration: 1,
                          repeatType: "reverse",
                        }}
                      >
                        <Image
                          src="./hand-left.svg"
                          className="w-32 h-full"
                          alt="Left hand extending pinkie in a pinkie promise gesture"
                          width={100}
                          height={100}
                        />
                      </motion.div>
                    </div>
                    {/* hand on the right */}
                    <div
                      onDrop={handleDrop}
                      onDragOver={handleDragOver}
                      className="w-32 h-full"
                    >
                      <motion.div
                        animate={{ rotate: [5, -5] }}
                        transition={{
                          repeat: Infinity,
                          duration: 1,
                          repeatType: "reverse",
                        }}
                      >
                        <Image
                          src="./hand-right.svg"
                          className="w-32 h-full"
                          alt="Right hand extending pinkie in a pinkie promise gesture"
                          draggable={true}
                          onDragStart={handleDragStart}
                          width={100}
                          height={100}
                        />

                        <div className="flex justify-start w-full">
                          <span className="text-6xl ml-10 ">←</span>
                        </div>
                      </motion.div>
                    </div>
                  </>
                )}
              </div>
            </div>
          )}

          {step < 3 && (
            <button
              type="submit"
              className="w-full bg-pink-500 text-white p-3 rounded-full text-lg hover:bg-pink-600 transition-colors"
            >
              Next
            </button>
          )}

          {step === 2 && (
            <section className="mt-4">
              <h2 className="text-center font-semibold">The promiser(s):</h2>
              <div className="flex justify-center mt-0 space-x-4">
                <br />
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="promiser"
                    value={promiser1}
                    onChange={(e) => setPromiser(e.target.value)}
                    required
                    className="form-radio text-pink-500"
                  />
                  <span>{promiser1}</span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="promiser"
                    value={promiser2}
                    onChange={(e) => setPromiser(e.target.value)}
                    required
                    className="form-radio text-pink-500"
                  />
                  <span>{promiser2}</span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="promiser"
                    value="both"
                    onChange={(e) => setPromiser(e.target.value)}
                    required
                    className="form-radio text-pink-500"
                  />
                  <span>
                    Both {promiser1} & {promiser2}
                  </span>
                </label>
              </div>
            </section>
          )}
        </form>
      </div>
      {/* confetti component */}
      <Confetti fireConfetti={fireConfetti} />
    </div>
  );
}
