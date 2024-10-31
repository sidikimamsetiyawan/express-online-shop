
const displayGroupAnagrams = (req, res) => {
    const anagramGroups = {};
    const { words } = req.body;
    try {
        words.forEach(word => {
            const sortedWord = word.split('').sort().join('');
            if (anagramGroups[sortedWord]) {
                anagramGroups[sortedWord].push(word);
            } else {
                anagramGroups[sortedWord] = [word];
            }
        });

        const sortedGroups = Object.values(anagramGroups)
            .map(group => group.sort())
            .sort((a, b) => b.length - a.length || (a[0] > b[0] ? 1 : -1));

        return res.json({
            message: 'Successfully retrieved and sorted anagram groups.',
            data: sortedGroups
        })
    } catch (error) {
        res.status(500).send(
            {
                message: 'An error occurred while processing anagram groups.',
                error: error
            });
    }
}

module.exports = {
    displayGroupAnagrams,
}