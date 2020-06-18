import React from "react";

import { BoxButtons, SignupButtom } from "./style";
import { useHistory } from "react-router-dom";
import { routes } from "../../containers/Router";

const LoginPageSignupButtons = () => {

  let history = useHistory();

  const goToSignupListener = () => {
    history.push(routes.SingupListenerPage);
  }

  const goToSignupListenerPremium = () => {
    history.push(routes.SignupListenerPremiumPage)
  }

  const goToSignupBand = () => {
    history.push(routes.SignupBandPage)
  }

  return (
    <BoxButtons>
      <SignupButtom
        variant="contained"
        color="default"
        onClick={goToSignupListener}
      >
        Criar conta gratuita
      </SignupButtom>
      <SignupButtom
        variant="contained"
        color="secondary"
        onClick={goToSignupListenerPremium}
      >
        Criar conta premium
      </SignupButtom>
      <SignupButtom
        variant="contained"
        color="primary"
        onClick={goToSignupBand}
      >
        Criar conta para banda
      </SignupButtom>
    </BoxButtons>
  )
}

export default LoginPageSignupButtons;