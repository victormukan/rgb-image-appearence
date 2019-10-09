import _ from 'lodash';

// eslint-disable-next-line
export const toEncode = 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy.'

// eslint-disable-next-line
export const decoded = `Qb qa i twvo mabijtqapml nikb bpib i zmilmz eqtt jm lqabzikbml jg bpm zmilijtm kwvbmvb wn i xiom epmv twwsqvo ib qba tigwcb. Bpm xwqvb wn caqvo Twzmu Qxacu qa bpib qb pia i uwzm-wz-tmaa vwzuit lqabzqjcbqwv wn tmbbmza, ia wxxwaml bw caqvo 'Kwvbmvb pmzm, kwvbmvb pmzm', uisqvo qb twws tqsm zmilijtm Mvotqap. Uivg lmasbwx xcjtqapqvo xiksioma ivl emj xiom mlqbwza vwe cam Twzmu Qxacu ia bpmqz lmnictb uwlmt bmfb, ivl i amizkp nwz 'twzmu qxacu' eqtt cvkwdmz uivg emj aqbma abqtt qv bpmqz qvnivkg.`



function getLineLetterAppearance(line) {
  const counts = _.countBy(line.toLowerCase().split(''));

  const chartData = [];

  Object
  .keys(counts)
  .forEach(i => 
    chartData.push({ 
      key: i, 
      value: counts[i], 
      frequency: Math.round(counts[i] / line.length * 1000) / 1000 
    })
  )

  return chartData.sort((a, b) => a.key.charCodeAt(0) - b.key.charCodeAt(0));
}

export const toEncodeChartData = getLineLetterAppearance(toEncode)
export const decodedChartData = getLineLetterAppearance(decoded)


