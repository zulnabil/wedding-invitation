import React, { useState } from "react"

import Image from "next/image"

import {
  FORM_GIFT_FIELDS,
  ATTENDEES,
} from "../constants/form-guest-book.constant"
import TextField from "@/common/components/inputs/text-field.component"
import Radio from "@/common/components/inputs/radio.component"
import Button from "@/common/components/inputs/button.component"
import Switch from "@/common/components/inputs/switch.component"

const FormGuestBook = () => {
  const [attendeesValue, setAttendeesValue] = useState(ATTENDEES[0].value)
  return (
    <form className="jost mt-12 flex flex-col items-center gap-y-4 text-center">
      {FORM_GIFT_FIELDS.map((field) => {
        switch (field.name) {
          case "attendance":
            return (
              <div key={field.name}>
                <p className="text-xl">{field.label}</p>
                <p className="text-xl text-gray-300 font-light">
                  {field.placeholder}
                </p>
                <div className="mt-4 flex justify-center items-center gap-4">
                  <p className="text-xl text-gray-300 font-light">No</p>
                  <Switch name={field.name} />
                  <p className="text-xl text-gray-300 font-light">Yes</p>
                </div>
              </div>
            )
          case "attendees":
            return (
              <div key={field.name} className="mt-4">
                <p className="text-xl">{field.label}</p>
                <div className="flex gap-4">
                  {ATTENDEES.map(({ label, ...attendees }) => (
                    <Radio
                      {...attendees}
                      noDot
                      key={label}
                      checked={attendeesValue === attendees.value}
                      onChange={(e) => setAttendeesValue(e.target.value)}
                      label={<span className="text-green-500">{label}</span>}
                      wrapperClassName="mt-4"
                    />
                  ))}
                </div>
              </div>
            )
          default:
            return (
              <TextField
                key={field.name}
                {...field}
                className="text-center"
                wrapperClassName="text-xl border-none"
              />
            )
        }
      })}
      <Button className="mt-8">
        <Image
          alt="icon-check"
          src="/images/icon-check.svg"
          height={14}
          width={14}
        />
        <span>Save my attendance</span>
      </Button>
    </form>
  )
}

export default FormGuestBook
