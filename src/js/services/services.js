const postData = async (url, data) => {
	try {
		const res = await fetch(url, {
			method: "POST",

			body: data,
		});
		return await res.text();
	} catch (error) {
		const syntaxError = new SyntaxError();
		console.log(syntaxError);
	}
};
export { postData };
