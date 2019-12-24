import { init } from '@rematch/core';
import createLoadingPlugin from '@rematch/loading';
import selectPlugin from '@rematch/select';

export default init({
    plugins: [selectPlugin(), createLoadingPlugin()],
});
