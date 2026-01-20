import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import i18n, { updateDirection } from '../i18n';

/**
 * Component that updates document direction when route changes.
 * Ensures LTR-only routes stay LTR even in Arabic mode.
 */
export default function LtrRouteHandler() {
    const location = useLocation();

    useEffect(() => {
        // Re-evaluate direction when route changes
        updateDirection(i18n.language);
    }, [location.pathname]);

    return null;
}
