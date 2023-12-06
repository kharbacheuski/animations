
const percents = () => {
    const screenWidth = window.innerWidth;

    const root = document.getElementsByClassName('root')[0]
    const percents = document.getElementsByClassName('percents')[0]
    const headline = document.getElementsByClassName("headline")[0]

    const speed = 20;
    const relation = headline.clientWidth/screenWidth;
    const iterationsCount = 1000

    let rootPercent, headlinePercent, offset = 0;

    const isBlocksAreMeeting = (percent) => {
        let blockStart = (headline.getBoundingClientRect().left/screenWidth) * 100
        let blockEnd = (headline.getBoundingClientRect().right/screenWidth) * 100

        return (percent > blockStart && percent < blockEnd)
    }

    for(let i = 0; i <= iterationsCount; i++) {
        setTimeout(() => {
            rootPercent = i/10;
            root.style.width = `${rootPercent}%`
            percents.innerHTML = `${(rootPercent).toFixed(0)}%`

            if(isBlocksAreMeeting(rootPercent)) {
                if(!offset) offset = rootPercent;

                headlinePercent = (rootPercent-offset)/relation
                headline.style.backgroundImage = `linear-gradient(90deg, var(--white) ${headlinePercent}%, var(--primary) ${headlinePercent}%, var(--primary) 100%)`
            }
        }, i/10 * screenWidth / speed)
    }
}

document.addEventListener('DOMContentLoaded', percents)