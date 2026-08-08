'use client';

import { useState } from 'react';
import { PedagogyScenario } from '@/data/scenarios';
import { ScenarioList } from './scenario-list';
import { ScenarioPractice } from './scenario-practice';

interface Props {
  scenarios: PedagogyScenario[];
}

export function ScenarioClient({ scenarios }: Props) {
  const [selected, setSelected] = useState<PedagogyScenario | null>(null);

  if (selected) {
    return <ScenarioPractice scenario={selected} onBack={() => setSelected(null)} />;
  }

  return <ScenarioList scenarios={scenarios} onSelect={setSelected} />;
}
