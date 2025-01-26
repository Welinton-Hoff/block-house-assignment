import React from "react";
import { Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import { PageView } from "src/components/PageView";

import theme from "src/theme";
import { useLogin } from "src/zustand/login";

import {
  SemiBoldLargeLightGray,
  SemiBoldExtraLargeWhite,
  RegularSmallLightGray,
} from "src/components/texts";
import * as S from "./styles";

export function Home() {
  const { onReset } = useLogin();

  function handleLogout() {
    onReset();
  }

  return (
    <PageView
      hideLeftIcon
      onRightIconPress={handleLogout}
      rightIcon={
        <Ionicons size={24} name="exit-outline" color={theme["green-300"]} />
      }
    >
      <S.Container>
        <Text>
          <SemiBoldExtraLargeWhite>Welcome, </SemiBoldExtraLargeWhite>
          <SemiBoldLargeLightGray>John Doe!</SemiBoldLargeLightGray>
        </Text>

        <RegularSmallLightGray>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
          et quas molestias excepturi sint occaecati cupiditate non provident,
          similique sunt in culpa qui officia deserunt mollitia animi, id est
          laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita
          distinctio. Nam libero tempore, cum soluta nobis est eligendi optio
          cumque nihil impedit quo minus id quod maxime placeat facere possimus,
          omnis voluptas assumenda est, omnis dolor repellendus. Temporibus
          autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe
          eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
          Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
          voluptatibus maiores alias consequatur aut perferendis doloribus
          asperiores repellat.
        </RegularSmallLightGray>
      </S.Container>
    </PageView>
  );
}
