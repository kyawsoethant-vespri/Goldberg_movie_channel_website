"use client";
import React from "react";
import Button from "../components/utils/Button";
import Input from "../components/utils/Input";

const SamplePage = () => {
  return (
    <div className="flex flex-col h-screen justify-center items-center gap-5">
      <Button
        type={"submit"}
        text={"submit"}
        onClick={() => {}}
        disabled={false}
        alternative="dangerBtn"
      />

      <Input
        type="text"
        // value={""}
        onChange={() => {}}
        placeholder={"search"}
        alternative={"defaultInput"}
      />
    </div>
  );
};

export default SamplePage;
