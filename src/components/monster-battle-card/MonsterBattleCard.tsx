import { Box } from '@mui/material';
import { Monster } from '../../models/interfaces/monster.interface';
import {
  BattleMonsterCard,
  BattleMonsterCardContent,
  BattleMonsterCardContentRow,
  BattleMonsterCardContentRowItem,
  BattleMonsterTitle,
  BattleMonsterSubTitle,
  ProgressBar,
  BattleMonsterImage,
} from './MonsterBattleCard.styled';

type MonsterCardProps = {
  monster?: Monster | null;
  title?: string;
};

const MonsterBattleCard: React.FC<MonsterCardProps> = ({ monster, title }) => {
  return (
    <BattleMonsterCard centralized>
      <BattleMonsterCardContent>
        {monster && (
          <BattleMonsterImage
            src={monster.imageUrl! || 'https://via.placeholder.com/136x100'}
          />
        )}
        <BattleMonsterTitle>
          {title || monster!.name}
        </BattleMonsterTitle>
        {monster && (
          <BattleMonsterCardContentRow>
            <BattleMonsterCardContentRowItem sx={{ flexGrow: 1 }}>
              <BattleMonsterSubTitle
                variant="body2"
              >
                HP
              </BattleMonsterSubTitle>
              <ProgressBar variant="determinate" value={monster.hp!} />
            </BattleMonsterCardContentRowItem>
            <BattleMonsterCardContentRowItem sx={{ flexGrow: 1 }}>
              <BattleMonsterSubTitle
                variant="body2"
              >
                Attack
              </BattleMonsterSubTitle>
              <ProgressBar variant="determinate" value={monster.attack!} />
            </BattleMonsterCardContentRowItem>
            <BattleMonsterCardContentRowItem sx={{ flexGrow: 1 }}>
              <BattleMonsterSubTitle
                variant="body2"
              >
                Defense
              </BattleMonsterSubTitle>
              <ProgressBar variant="determinate" value={monster.defense!} />
            </BattleMonsterCardContentRowItem>
            <BattleMonsterCardContentRowItem sx={{ flexGrow: 1 }}>
              <BattleMonsterSubTitle
                variant="body2"
              >
                Speed
              </BattleMonsterSubTitle>
              <ProgressBar variant="determinate" value={monster.speed!} />
            </BattleMonsterCardContentRowItem>
          </BattleMonsterCardContentRow>
        )}
      </BattleMonsterCardContent>
    </BattleMonsterCard>
  );
};

export { MonsterBattleCard };
