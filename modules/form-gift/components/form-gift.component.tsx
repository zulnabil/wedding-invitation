import React, { useState } from "react"

import Image from "next/image"

import {
  FORM_GIFT_FIELDS,
  NOMINALS,
  PAYMENT_METHODS,
} from "../constants/form-gift.constant"
import TextField from "../../../common/components/inputs/text-field.component"
import Checkbox from "../../../common/components/inputs/checkbox.component"
import Radio from "../../../common/components/inputs/radio.component"
import Button from "../../../common/components/inputs/button.component"

const FormGift = () => {
  const [nominalValue, setNominalValue] = useState(NOMINALS[0].value)
  const [paymentMethodValue, setPaymentMethodValue] = useState(
    PAYMENT_METHODS[0].value
  )
  return (
    <form className="jost mt-12 flex flex-col gap-x-48 gap-y-8 flex-wrap text-left text-white lg:max-h-100">
      {FORM_GIFT_FIELDS.map((field) => {
        switch (field.name) {
          case "senderName":
            return (
              <div key={field.name}>
                <TextField {...field} wrapperClassName="text-xl" />
                <Checkbox
                  name="hideName"
                  label="Hide my name"
                  wrapperClassName="mt-2"
                />
              </div>
            )
          case "nominal":
            return (
              <div key={field.name}>
                <TextField {...field} wrapperClassName="text-xl" />
                <div className="flex gap-4">
                  {NOMINALS.map(({ label, ...nominal }) => (
                    <Radio
                      {...nominal}
                      noDot
                      key={label}
                      checked={nominalValue === nominal.value}
                      onChange={(e) => setNominalValue(e.target.value)}
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
                wrapperClassName="text-xl"
              />
            )
        }
      })}
      <div>
        <label className="text-xl">Send you gift from these e-wallet</label>
        <div className="mt-5 flex gap-4">
          {PAYMENT_METHODS.map(({ src, ...paymentMethod }) => (
            <Radio
              {...paymentMethod}
              noDot
              key={src}
              checked={paymentMethodValue === paymentMethod.value}
              onChange={(e) => setPaymentMethodValue(e.target.value)}
              label={
                // eslint-disable-next-line @next/next/no-img-element
                <img alt={paymentMethod.id} height="32" width="36" src={src} />
              }
              labelClassName="px-5"
            />
          ))}
        </div>
      </div>
      <div className="flex gap-3">
        <Image
          alt="icon-trusted"
          src="/images/icon-trusted.svg"
          height={22}
          width={18}
        />
        <p className="text-gray-300">All transaction encrypted by SSL</p>
      </div>
      <Button className="self-start">
        <Image
          alt="icon-gift"
          src="/images/icon-gift.svg"
          height={20}
          width={20}
        />
        <span>Send this special gift</span>
      </Button>
    </form>
  )
}

export default FormGift
