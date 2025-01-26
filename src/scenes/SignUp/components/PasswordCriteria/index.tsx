import React from "react";

import * as S from "./styles";

export function PasswordCriteria() {
  return (
    <S.Container>
      <S.CriteriaContainer>
        <S.BulletPoint />

        <S.CriteriaDescription>
          The password must be at least 6 characters long.
        </S.CriteriaDescription>
      </S.CriteriaContainer>

      <S.CriteriaContainer>
        <S.BulletPoint />

        <S.CriteriaDescription>
          The password must include at least one special character from the
          following set: !@#$%^&*.
        </S.CriteriaDescription>
      </S.CriteriaContainer>

      <S.CriteriaContainer>
        <S.BulletPoint />

        <S.CriteriaDescription>
          The password can include uppercase and lowercase letters (A-Z, a-z)
          and digits (0-9).
        </S.CriteriaDescription>
      </S.CriteriaContainer>
    </S.Container>
  );
}
