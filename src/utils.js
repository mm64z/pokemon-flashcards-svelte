import { TYPE_CHART } from "./types";

export function findSuperEffective (type1, type2=undefined) {
  const effectiveness = 2
  if (type2) {
    return findOffensive(buildDualTypeOffensive(type1, type2), effectiveness);
  } else {
    return findOffensive(buildOffensive(type1), effectiveness);
  }
}

export function findResistant (type1, type2=undefined) {
  const effectiveness = 0.5
  if (type2) {
    return findOffensive(buildDualTypeOffensive(type1, type2), effectiveness);
  } else {
    return findOffensive(buildOffensive(type1), effectiveness);
  }
}

export function findWeakTo (type1, type2=undefined) {
  const effectiveness = 2
  if (type2) {
    return findDefensive(buildDualTypeDefensive(type1, type2), effectiveness);
  } else {
    return findDefensive(buildDefensive(type1), effectiveness);
  }
}

export function findStrongAgainst (type1, type2=undefined) {
  const effectiveness = 0.5
  if (type2) {
    return findDefensive(buildDualTypeDefensive(type1, type2), effectiveness);
  } else {
    return findDefensive(buildDefensive(type1), effectiveness);
  }
}

export function find4xWeakTo(type1, type2) {
  const effectiveness = 4;
  return findDefensive(buildDualTypeDefensive(type1, type2), effectiveness);
}

function findOffensive(typingChart, effectiveness) {
  return Object.entries(typingChart)
  .map((entry) => {
    const [defenderType, effective] = entry;
    if (effective == effectiveness) {
      return defenderType;
    }
  })
  .filter((element) => !!element);
}

function findDefensive(typingChart, effectiveness) {
  return Object.entries(typingChart)
  .map((entry) => {
    const [attackerType, effective] = entry;
    if (effective == effectiveness) {
      return attackerType;
    }
  })
  .filter((element) => !!element);
}

function buildDualTypeOffensive(type1, type2) {
  const list1 = TYPE_CHART[type1];
  const list2 = TYPE_CHART[type2];
  let toReturn = {}
  list1.map((entry) => {
    const [type, effective1] = entry;
    toReturn[type] = effective1*list2[type];
  })
  return toReturn;
}

function buildDualTypeDefensive(type1, type2) {
  let toReturn = {}
  Object.entries(TYPE_CHART)
    .map((entry) => {
      const [attackerType, defenderEntries] = entry;
      toReturn[attackerType] = defenderEntries[type1]*defenderEntries[type2];
  })
  return toReturn;
}

function buildOffensive (type) {
  return TYPE_CHART[type]
}
function buildDefensive (type) {
  let toReturn = {}
  Object.entries(TYPE_CHART).map((entry) => {
    const [attackerType, defenderEntries] = entry;
    toReturn[attackerType] = defenderEntries[type];
  })
  return toReturn;
}