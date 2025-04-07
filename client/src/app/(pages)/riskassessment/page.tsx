import React from 'react'
import RiskAssessmentLeft from './_components/riskassessmentLeft'
import RiskAssessmentRight from './_components/riskassessmentRight'

const RiskAssessment = () => {
  return (
    <div className="flex pt-16 md:pt-0" >
      <RiskAssessmentLeft/>
      <RiskAssessmentRight/>
    </div>
  )
}

export default RiskAssessment
