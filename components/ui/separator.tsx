import * as React from 'react';

export function Separator({ className = '' }: { className?: string }) {
  return <hr className={`border-t border-border/70 ${className}`} />;
}
export default Separator;
