import styled from "@emotion/styled"
import { Box, Card, CardContent, LinearProgress, linearProgressClasses, Typography } from "@mui/material"
import { colors } from "../../constants/colors"

export const BattleMonsterCard = styled(Card, { shouldForwardProp: (prop) => prop !== "centralized" })<{ centralized?: boolean; }>(({ centralized }) => ({
    padding: '13px 11px',
    width: 'calc(307px - 22px)',
    height: '415px',
    background: colors.white,
    boxShadow: '-2px 3px 10px rgba(0, 0, 0, 0.25)',
    borderRadius: '7px',
    display: centralized ? 'flex' : 'auto',
    alignItems: centralized ? 'center' : 'auto',
    justifyContent: centralized ? 'center' : 'auto',
}))

export const BattleMonsterCardContent = styled(CardContent)(() => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0px',
}))

export const BattleMonsterCardContentRow = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0px',
    width: '100%',
}))

export const BattleMonsterCardContentRowItem = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0px',
    width: '100%',
}))

export const BattleMonsterImage = styled.img(() => ({
    width: '283px',
    height: '178px',
    borderRadius: '7px',
    filter: 'drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.25))',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}))

export const BattleMonsterTitle = styled(Typography)(() => ({
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '36px',
    lineHeight: '42px',
    color: colors.black,
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    margin: '14px 0px 5px 0px',
    width: '100%',
}))

export const BattleMonsterSubTitle = styled(Typography)(() => ({
    height: '14px',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '12px',
    lineHeight: '14px',
    color: colors.black,
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    margin: '11px 0px 5px 0px',
    width: '100%',
}))

export const ProgressBar = styled(LinearProgress)(() => ({
    width: '100%',
    height: 8,
    borderRadius: 15,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: colors.progressBarBackground,
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 15,
        backgroundColor: colors.progressColor,
    },
}));