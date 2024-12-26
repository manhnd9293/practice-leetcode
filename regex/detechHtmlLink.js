function processData(input) {
  //Enter your code here
  const links = [];
  const aTags = input.match(/(?<=<a\s*).*?(?=\/a>)/g);
  for(const tag of aTags) {
    // console.log({tag})
    const url = tag.match(/(?<=href=").*?(?=")/)[0];
    let linkName = tag;
    while (linkName.match(/(?<=>).*(?=<)/) !== null) {
      linkName = linkName.match(/(?<=>).*(?=<)/)[0];
      if(linkName.match(/<.*\/>/)) {
        linkName = '';
        break;
      }
      // console.log({linkName})
    }
    // console.log({url, linkName})

    links.push({url, linkName: linkName.trim()});
  }
  for(const link of links) {
    console.log(`${link.url},${link.linkName}`)
  }
}


const input = "7\n" +
  "<center>\n" +
  "<div class=\"noresize\" style=\"height: 242px; width: 600px; \"><map name=\"ImageMap_1_971996215\" id=\"ImageMap_1_971996215\">\n" +
  "<area href=\"/wiki/File:Pardalotus_punctatus_female_with_nesting_material_-_Risdon_Brook.jpg\" shape=\"rect\" coords=\"3,3,297,238\" alt=\"Female\" title=\"Female\" />\n" +
  "<area href=\"/wiki/File:Pardalotus_punctatus_male_with_nesting_material_-_Risdon_Brook.jpg\" shape=\"rect\" coords=\"302,2,597,238\" alt=\"Male\" title=\"Male\" /></map><img alt=\"Pair of Spotted Pardalotes\" src=\"//upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Female_and_male_Pardalotus_punctatus.jpg/600px-Female_and_male_Pardalotus_punctatus.jpg\" width=\"600\" height=\"242\" srcset=\"//upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Female_and_male_Pardalotus_punctatus.jpg/900px-Female_and_male_Pardalotus_punctatus.jpg 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Female_and_male_Pardalotus_punctatus.jpg/1200px-Female_and_male_Pardalotus_punctatus.jpg 2x\" usemap=\"#ImageMap_1_971996215\" />\n" +
  "<div style=\"margin-left: 0px; margin-top: -20px; text-align: left;\"><a href=\"/wiki/File:Female_and_male_Pardalotus_punctatus.jpg\" title=\"About this image\"><img alt=\"About this image\" src=\"//bits.wikimedia.org/static-1.22wmf7/extensions/ImageMap/desc-20.png\" style=\"border: none;\" /></a></div>\n" +
  "</div>\n" +
  "</center>"

processData(input)
