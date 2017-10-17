import {StyleSheet} from 'react-native'
import THEME from '../../../../theme/variables/airbitz'

export default StyleSheet.create({
  headerRoot: {
    zIndex: 1006
  },
  sideTextWrap: {
    paddingTop: 3,
    paddingBottom: 3
  },
  sideText: {
    color: THEME.COLORS.PRIMARY,
    fontSize: 18
  },
  icon: {
    color: THEME.COLORS.PRIMARY,
    fontSize: 25
  },
  default: {
    backgroundColor: THEME.COLORS.TRANSPARENT,
    color: THEME.COLORS.PRIMARY
  }
})
