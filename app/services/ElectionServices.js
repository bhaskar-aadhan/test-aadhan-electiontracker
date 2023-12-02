const getMagicFigure = (data) => {
    let result = data / 2;
    if (Number.isInteger(result)) {
        result += 1;
    } else {
        result = Math.ceil(result)
    }
    return result
}

const addMagicFigureData = (data) => {
    const addedData = data?.map((state) => {
        let magicFigure = getMagicFigure(state['total_constituencies'])
        return { ...state, 'magic_figure': magicFigure }
    })
    return addedData
}

const getMagicFigureData = async (data, stateName) => {
    const magicData = await addMagicFigureData(data?.[0]?.['states'])
    const stateData = await magicData?.find((state) => state['name'] === stateName)
    const magicFigure = await stateData?.['magic_figure']
    return magicFigure
}
const getMagicFigureSateLevelData = (data, stateName) => {
    const stateData = getSateLevelStateData(data, stateName)
    const magicFigure = getMagicFigure(stateData?.[0]?.['total_constituencies'])
    return magicFigure
}

const getSateData = (data, stateName) => {
    const stateData = data.filter((state) => state['name'] === stateName)
    return stateData
}
const getSateLevelStateData = (data, stateName) => {
    const stateData = data.filter((state) => state['state'] === stateName)
    return stateData
}
const getConstituenciesData = (data, stateName, constituency) => {
    const stateData = getSateLevelStateData(data, stateName)
    const constituenciesData = stateData[0]['constituencies'].filter((constituencie) => constituencie['name'] === constituency)
    // const statusData = 
    constituenciesData.forEach((stat) => {
        const sortedData = stat['candidates'].sort((a, b) => b['total_votes'] - a['total_votes'])
        const addedData = sortedData.map((candidate, index, array) => (
            { ...candidate, status: index === 0 ? "Leading" : "Trailing", differData: index === 0 ? candidate['total_votes'] - array[1]['total_votes']:0, color: index ===0 ? '#00B929':'#FF8300' }
        ))
        stat['candidates'] = addedData
    })
    return constituenciesData
}

async function copyTextToClipboard(text) {
    if ('clipboard' in navigator) {
        return await navigator.clipboard.writeText(text);
    } else {
        return document.execCommand('copy', true, text);
    }
}

export {
    addMagicFigureData,
    getMagicFigureData,
    getMagicFigureSateLevelData,
    getSateData,
    getSateLevelStateData,
    getConstituenciesData,
    copyTextToClipboard,
}