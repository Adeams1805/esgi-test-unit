export const postItem = (itemName, itemContent, itemDate) => {
    return fetch('/items',{
        method: 'POST',
        body: JSON.stringify({
          name: itemName,
          content: itemContent,
          createdAt: itemDate
        }),
        headers: {"Content-Type": "application/json"}
    })
}