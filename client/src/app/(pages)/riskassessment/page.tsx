import React from 'react'
import RiskAssessmentLeft from './_components/riskassessmentLeft'
import RiskAssessmentRight from './_components/riskassessmentRight'

const RiskAssessment = () => {
  return (
    <div className="flex h-screen w-full overflow-hidden  pt-15 md:pt-0" >
      <RiskAssessmentLeft/>
      <RiskAssessmentRight/>
    </div>
  )
}

export default RiskAssessment
